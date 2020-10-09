const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({
	imageURL: {
		type: String,
		required: false
	},
	name: {
		type: String,
		required: true,
	},
	rating: {
		type: Number,
		required: true
	},
	urlToRecipe: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true
	},
	ingredients: {
		type: Array,
		required: true
	}
});

module.exports = RecipeSchema