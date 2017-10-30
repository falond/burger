//Require express
var express = require("express");
//Router
var router = express.Router();
// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");



//Router redirect
router.get('/', function(req, res){
	res.redirect('/burgers')
});
//Select all router for displaying whats in the db
router.get('/burgers', function(req, res){
	burger.selectAll(function(data){
		var hbsObject = {burgers: data};

		console.log(hbsObject);

		res.render('index', hbsObject);
	});
});
//Router to post new burger names(user input)
router.post('/burgers/create', function(req, res){
	burger.insertOne(['burger_name'], [req.body.burger_name], function(data){
		res.redirect('/burgers')
	});
});
//Router to update the db
router.put('/burgers/update/:id', function(req, res){
	var condition = 'id = ' + req.params.id;

	console.log('condition ', condition);

	burger.updateOne({'devoured': req.body.devoured}, condition, function(data){
		res.redirect('/burgers');
	});
});



// Export routes for server.js to use.
module.exports = router;
