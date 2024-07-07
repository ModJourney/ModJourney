// priority: 100

/**
 * init.js
 *
 * this script is used for initializing classes and helper functions
 * it must be loaded after the classes and helper functions are loaded
 */

/**
 * @var {RecipeHelper}
 */
let replacer;
ServerEvents.recipes(event => {
    replacer = new RecipeHelper(event)

    replacer.doSomething();
})