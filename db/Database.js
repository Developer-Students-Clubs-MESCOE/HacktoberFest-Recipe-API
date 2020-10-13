const config = require('./config');
const RecipeSchema = require('../models/Recipe');
const mongoose = require('mongoose');
const { request: req, response: res } = require('express');
const Recipe = mongoose.model('Recipe', RecipeSchema);
class Database {
	constructor() {
		console.log("Database Instance Created")
	}

	connect() {
		mongoose.connect(config.mongoURI, {
			useCreateIndex: true,
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useFindAndModify: true
		})
		mongoose.connection.once('open', () => {
			console.log('MongoDB Connected')
		}).on('error', (err) => {
			console.log('MongoDB Connection Error ' + err)
		})
	}

	//	TODO: Add methods for insert, update, delete, read
	getAll = function (req, res) {
		Recipe.find(function (err, result) {
			if (err) {
				res.send(err);
			} else {
				res.json(result);
			}
		})
	}

	getOne = function (req, res) {
		Recipe.find({ _id: req.params.id }, function (err, result) {
			if (err) {
				res.send(err);
			} else {
				res.json(result);
			}
		})
	}

	deleteAll = function (req, res) {
		Recipe.remove(function (err) {
			if (err) {
				res.send(err);
			} else {
				res.json('Removed all recipes from database');
			}
		})
	}

	deleteOne = function (req, res) {
		Recipe.findOneAndDelete({ _id: req.params.id }, function (err) {
			if (err) {
				res.send(err);
			} else {
				res.json('Recipe deleted from database');
			}
		})
	}

	updateByID = function (req, res) {
		Recipe.findOneAndUpdate({ _id: req.params.id }, { $set: req.body }, function (err) {
			if (err) {
				res.send(err);
			} else {
				res.json('Recipe updated successfully');
			}
		})
	}

	insert = function (req, res) {
		const recipeInfo = new Recipe({
			imageURL: req.body.imageURL,
			name: req.body.name,
			rating: parseInt(req.body.rating),
			urlToRecipe: req.body.urlToRecipe,
			description: req.body.description,
			ingredients: req.body.ingredients,
		});

		recipeInfo.save(function (err) {
			if (err) {
				res.send(err);
			} else {
				res.json('Recipe saved to database');
			}
		})
	}
}

module.exports = new Database();