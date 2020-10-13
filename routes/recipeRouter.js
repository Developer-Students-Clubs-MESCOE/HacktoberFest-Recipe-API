const express = require('express');
const recipeRouter = express.Router();
const db = require('../db/Database');

/* Create Connection */
db.connect();

/* TODO: GET all recipes. */
recipeRouter.get('/', db.getAll);

/* TODO: GET a particular recipe by ID. */
<<<<<<< HEAD
recipeRouter.get('/:id', db.getByID);
=======
recipeRouter.get('/:id', db.getOne);
>>>>>>> 8adacc2... Fixed issue #2 || Create recipe routes using db functions

/* TODO: DELETE all recipes || USE WITH CAUTION ||. */
recipeRouter.delete('/', db.deleteAll);

/* TODO: DELETE a particular recipe by ID. */
<<<<<<< HEAD
recipeRouter.delete('/:id', db.deleteByID);
=======
recipeRouter.delete('/:id', db.deleteOne);
>>>>>>> 8adacc2... Fixed issue #2 || Create recipe routes using db functions

/* TODO: UPDATE a particular recipe by ID. */
recipeRouter.patch('/:id', db.updateByID);

/* TODO: POST a new recipe. */
recipeRouter.post('/', db.insert);

/* TODO: Get 3 recipes by rating (highest). */

/* TODO: Get 3 recipes by rating (lowest). */

/* TODO: Get recipes which have n number of ingredients - n is used as a parameter to the request. */

/* TODO: Get recipe(s) with the least number of ingredients. */

/* TODO: Get recipe(s) with the most number of ingredients. */

module.exports = recipeRouter;
