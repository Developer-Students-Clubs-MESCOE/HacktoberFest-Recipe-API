const express = require('express');
const recipeRouter = express.Router();

// HINT: Use the methods you'll create in Database.js here

/* TODO: GET all recipes. */
recipeRouter.get('/', function(req, res, next) {
  res.send('Gets all recipes');
});

/* TODO: GET a particular recipe by ID. */

/* TODO: DELETE all recipes || USE WITH CAUTION ||. */

/* TODO: DELETE a particular recipe by ID. */

/* TODO: UPDATE a particular recipe by ID. */

/* TODO: POST a new recipe. */

/* TODO: Get 3 recipes by rating (highest). */

/* TODO: Get 3 recipes by rating (lowest). */

/* TODO: Get recipes which have n number of ingredients - n is used as a parameter to the request. */

/* TODO: Get recipe(s) with the least number of ingredients. */

/* TODO: Get recipe(s) with the most number of ingredients. */

module.exports = recipeRouter;
