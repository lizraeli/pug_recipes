const express = require('express');
const router = express.Router();

const db = require('../model/lowdb.js')


/* get all recipes */
function getAllRecipes(req, res, next) {
  const recipeArr = db.get('recipes').value();
  res.render('recipeList', {recipes: recipeArr})
}

router.get('/', getAllRecipes)

// GET a single recipe by id
router.get('/id/:id', function(req, res, next) {
  const recipe = db.get('recipes')
    .find({
      id: req.params.id
    })
    .value();

  if (!recipe) {
    res.send(htmlLayout('could not find recipe'))
  } else {
    res.render('recipe', {recipe: recipe})    
  }
})

/* Get Form to Add a new recipe */
router.get('/new', function (req, res, next) {
  res.render('recipeForm');
});

/* Add a new recipe */
router.post('/new', function (req, res, next) {
  console.log(req.body)

  // Details from form input are in req.body
  const name = req.body.name;
  // split ingredients on new lines
  const ingredients = req.body.ingredients.split('\r\n');
  // split steps on new lines
  const steps = req.body.steps.split('\r\n');
  const imageURL = req.body.imageURL;

  // building a recipe object
  const recipe = {
    name,
    ingredients,
    steps,
    imageURL
  }

  // Insert new recipe into the database
  db.get('recipes')
    .insert(recipe)
    .write()

  // Redirect user to the all recipes page
  res.redirect('/recipes')
});

module.exports = router;