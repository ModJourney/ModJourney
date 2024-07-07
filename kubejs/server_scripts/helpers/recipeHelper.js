// priority: 101

/*
// ES6 format is not working here - @see https://stackoverflow.com/a/49193783/2377961
class RecipeHelper {
    constructor(recipeEvent) {
        this.event = recipeEvent;
    }
}
*/

/**
 * Set the event that is used for all actions
 *
 * @param {dev.latvian.mods.kubejs.recipe.RecipesEventJS} recipeEvent
 *
 * @example `
 * ServerEvents.recipes(event => {
 *    const replacer = new RecipeHelper(event)
 * }
 * `
 */
const RecipeHelper = function(recipeEvent) {
    this.event = recipeEvent;
}

// Defining the methods
RecipeHelper.prototype = {
    /**
     * My Info text
     */
    doSomething: function() {
        console.log('Do Something function')
        console.log(this.event)
    }
}



