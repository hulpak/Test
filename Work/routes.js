exports.index = function(req, res) {
	res.render("index", {
		title: "Express"
	});
};


exports.hello = function(req, res) {
	var _ = require("underscore");
	var mdbClient = require('mongodb').MongoClient;

	mdbClient.connect("mongodb://localhost:27017/shop", function(err, db) {
		var collection = db.collection('categories');

		collection.find().toArray(function(err, items) {
			var items = JSON.parse(JSON.stringify(items));
			res.render("hello", {
				_ : _,
				title : "Friday",
				items : items
			});

			db.close();
		});
	});
};

exports.inter = function(req, res) {
	var _ = require("underscore");
	var mdbClient = require('mongodb').MongoClient;

	mdbClient.connect("mongodb://localhost:27017/shop", function(err, db) {
		var collection = db.collection('products');

		collection.find().toArray(function(err, items) {
			var items = JSON.parse(JSON.stringify(items));
			res.render("inter", {
				// Underscore.js lib
				_ : _,
				title : "Monday",
				items : items
			});

			db.close();
		});
	});
};
