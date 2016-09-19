-- Database name
codechallenge4

-- Document you create tables pSQL here
CREATE TABLE treats(
	id SERIAL PRIMARY KEY,
	treatname VARCHAR(140),
	description VARCHAR(140),
	pic Boolean
);

---test an item--
INSERT INTO treats VALUES(1, 'cake', 'chocolate', 'Y');



----- I just did a boolean for a pic as in whether or not the treat had one,
--I did try a couple of things, but none of them worked for storing an img on
--the table.
