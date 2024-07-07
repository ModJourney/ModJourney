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
 * @param {dev.latvian.mods.kubejs.recipe.RecipesEventJS|null} recipeEvent
 *
 * @example `
 * const replacer = new RecipeHelper(null)
 * ServerEvents.recipes(event => {
 *    replacer.init(event)
 * }
 *
 * // use the replacer somewhere else
 * replacer.changeRecipeFunction()
 * `
 */
const RecipeHelper = function(recipeEvent) {
    this.event = recipeEvent;
}

// Defining the methods
RecipeHelper.prototype = {
    /**
     * @param {dev.latvian.mods.kubejs.recipe.RecipesEventJS} recipeEvent
     */
    init: function (recipeEvent) {
        this.event = recipeEvent
    },

    // get and set the event - throw error when event is used without initialisation
    // @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get
    set event (recipeEvent) { this._event = recipeEvent },
    get event () {
        if (!this._event) throw '"event" is not set, please call init(RecipesEventJS) first'
        return this._event
    },


    /**
     * My Info text
     */
    doSomething: function () {
        console.log('Do Something function')
        console.log(this.event)
    }
}



