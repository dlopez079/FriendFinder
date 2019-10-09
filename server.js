//DEPENDENCIES***************************************************
var express = require("express");
//***************************************************************


//SET UP THE EXPRESS APP*****************************************
var app = express();
var PORT = 3000;
//***************************************************************


// SET UP THE EXPRESS APP TO HANDLE DATA PARSING*****************
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
// **************************************************************


//REQUIRE ROUTING************************************************
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);
// **************************************************************


//APP LISTEN*****************************************************
app.listen(PORT, function() {
    console.log("Port at : " + PORT);
    console.log("http://localhost:" + PORT)
})