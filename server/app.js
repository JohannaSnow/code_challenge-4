var express = require(' express ');
var app = express();
var path = require('path');
var urlencodedParser = bodyParser.urlencoded({
    extended: false
});
var pg = require('pg');
var connectionString = 'postgress://localhost:5432/codechallenge4';
var port = process.env.PORT || 3000;


//static folder

app.use(express.static('public'));

//spin up server
app.listen(port, function() {
    console.log(' server up on', port);
});

//base url
app.get('/', function(req, res) {
    console.log('base url hit');
    res.sendFile(path.resolve('public/index.html'));
});


app.get(' /getTreats', function(req, res) {
    console.log('getTreatsroute hit');
    //connect to db
    pg.connect(connectionString, function(err, client, done) {
        //if error
        if (err) {
            console.log(err);
        } // end error connect
        else {
            console.log('connected to db');
            //array to hold our results
            var resultsArray = [];
            //query to db
            var queryResults = client.query('SELECT * FROM treat');
            console.log(queryResults);
            queryResults.on(' row', function(row) {
              //push each row of db into results array
                resultsArray.push(row);
            }); // end on row
            queryResults.on(' end', function() {
              //let the db know we're done
                done();
                //send the response back to the client
                res.send( resultsArray );
            }); // end query results
        } //end else
    }); //end connect (PG)
}); // end get treats route

//add to treats a description and pic
app.post('/addTreats', urlencodedParser, function(req, res) {
    console.log('addTreats route hit:', req.body);
    //create DB data
    var treat = req.body.treat;
    var description = req.body.description;
    var pic = req.body.pic;
    pg.connect(connectionString, function(err, client, done) {
        //if err
        if (err) {
            console.log(err);
        } // successful conncetions
        else {
            console.log("conncected to the db");
            //make a client
            client.query("INSERT INTO treats) VAlUES($1, $2, $3);" [treatname, description, pic]);
            console.log("treat added to DB");
            done();
        } //end else
    }); //end connect (PG)
}); // end add treat
