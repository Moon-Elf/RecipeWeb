const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipeController');

/**
 * App Routes 
*/
router.get('/', recipeController.homepage);
router.get('/recipe/:id', recipeController.exploreRecipe);
router.get('/categories', recipeController.exploreCategories);
router.get('/categories/:id', recipeController.exploreCategoriesById);
router.post('/search', recipeController.searchRecipe);
router.get('/explore-latest', recipeController.exploreLatest);
router.get('/explore-random', recipeController.exploreRandom);
router.get('/submit-recipe', recipeController.submitRecipe);
router.post('/submit-recipe', recipeController.submitRecipeOnPost);

// Add routes for updating and deleting recipes
router.get('/recipes/:id/edit', recipeController.editRecipe);
router.post('/recipes/:id/update', recipeController.updateRecipe);
// router.post('/recipes/:id/delete', recipeController.deleteRecipe);
router.delete('/recipes/:id', recipeController.deleteRecipe);



module.exports = router;
