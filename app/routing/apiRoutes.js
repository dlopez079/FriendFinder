//WE REQUIRE THE ARRAY IN THE FRIENDS.JS FILE.
var friends = require("../data/friends");

//USE MODULE EXPORT TO MAKE CODE AVAILABLE TO OTHER FILES. 
module.exports = function(app) {
    
    app.get("/api/friends", function(req, res){
        res.json(friends)
    });

    app.post("/api/friends", function(req, res){
        //CREATE YOUR LOG FOR COMPAIRING FRIENDS SCORES FROM SURVEY
        friends.push(req.body);
    });

}