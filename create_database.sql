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
--I guess i could have maybe done a pic varchar(450) or something for the url
--but I didn't think that would work so I tried image_path VARCHAR(255) NOT NULL
--but that didn't work for me, so I left it as Boolean even though that's
---technically wrong because it's not going to pull an image from the DB when a
--treat is selected.  
