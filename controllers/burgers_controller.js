var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(request, response) {
    burger.all(function(data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        response.render("index", hbsObject);
    });
});

router.post("/", function(request, response) {
    burger.create(
        request.body.burger_name, 
        function(data) {
            response.redirect("/");
        }
    );
});

router.put("/:id", function(request, response) {
    burger.devour(
        request.params.id,
        function(data) {
            response.redirect("/");
        }
    );
});

module.exports = router;