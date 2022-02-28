import * as model from './model.js';
import recipeView from "./views/recipeView.js";

import 'core-js/stable';
import 'regenerator-runtime';
import {loadSearchResults} from "./model.js";

const recipeContainer = document.querySelector('.recipe');


// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////


const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    if (!id) {
      return;
    }
    recipeView.renderSpinner();
    //Loading the recipe
    await model.loadRecipe(id);
    //Rendering recipe
    recipeView.render(model.state.recipe);
  } catch (err) {
    recipeView.renderError();
  }
};

const controlSearchResults = async function(){
  try {
    await model.loadSearchResults('pizza');
  } catch (err) {
    console.log(err);
  }
};

const init = function () {
  recipeView.addHandlerRender(controlRecipes);
};

init();