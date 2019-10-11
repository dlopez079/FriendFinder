//WE REQUIRE THE ARRAY IN THE FRIENDS.JS FILE.
var friends = require("../data/friends");

//USE MODULE EXPORT TO MAKE CODE AVAILABLE TO OTHER FILES. 
module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friends);
        // console.log(friends); CONFIRMED WORKING!
    });

    app.post("/api/friends", function (req, res) {
        //CREATE YOUR LOG FOR COMPAIRING FRIENDS SCORES FROM SURVEY
        // console.log(req.body); CONFIRMED WORKING!


        //I created a break for my console.logs returns
        var linebreak = "***********************************************************";

        //I created an object that will hold the best match that includes properties with empty values so that we can push values when into them after a match is found.  There is an extra property called 'friendDifference which holds a value of 1000
        var bestMatch = {
            name: "",
            photo: "",
            friendDifference: 1000
        };

        //I created a variable to hold the req.body called userData
        var userData = req.body;

        //I created a variable userName to hold the req.body.name
        var userName = userData.name;

        //I created a variable userScores to hold the req.body.scores
        var userScores = userData.scores;

        //I'm taking every value in the userScores array and changing it from string to integer with radix of 10.  This will allow me to do the math necessary math to find out best friend. 
        var b = userScores.map(function (item) {
            return parseInt(item, 10);
        });
        console.log(req.body.photo);
        //The user data that we obtain from the user must be put in an object so we can push it to the friends object.  I include the b array.
        userData = {
            name: userName,  //name: userName
            photo: req.body.photo,  
            scores: b
        };

        console.log(userName); //Confirmed Username populates
        console.log(userScores);  //Confirmed userScores populates
        console.log(linebreak); //Line break to separate users.

         
        var sum = b.reduce((a, b) => a + b, 0);

        console.log("Sum of users score " + sum);
        console.log("Best match friend diff " + bestMatch.friendDifference);
        console.log(linebreak);

        for (var i = 0; i < friends.length; i++) {
            console.log(friends[i].name);
            var totaldiff = 0;
            console.log("Total Diff " + totaldiff);
            console.log("Best match friend diff " + bestMatch.friendDifference);

            var bfriendScore = friends[i].scores.reduce((a, b) => a + b, 0);
            console.log("Total friend score " + bfriendScore);
            totaldiff += Math.abs(sum - bfriendScore);
            console.log("-------------------------> " + totaldiff);

            if (totaldiff <= bestMatch.friendDifference) {
                bestMatch.name = friends[i].name;
                bestMatch.photo = friends[i].photo;
                bestMatch.friendDifference = totaldiff;
            }
            console.log(totaldiff + " Total Difference");
        }
        console.log(bestMatch);

        //I pushed the new user to the friends array.
        friends.push(userData);
        console.log("New user added");
        console.log(userData);
        res.json(bestMatch);

    });

}