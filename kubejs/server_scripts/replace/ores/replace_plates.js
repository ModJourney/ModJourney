// priority: 10

ServerEvents.recipes(event => {

    //Vereinfachung der remove Funktion, basierend auf tags
    let del_recipe_tree = (element, rohmaterial) => {
        event.remove({output: "#forge:" + rohmaterial + "/" + element})
      } 

    // remove gear Recipes
    let ato_ores_with_mc = ato_ores
    ato_ores_with_mc.push("gold", "iron", "copper")

    ato_ores_with_mc.forEach((replace) => {
        del_recipe_tree(replace, "plates") 
    })

    del_recipe_tree('diamond', 'plates')

    // define new gear Recipes from thermal press.
    ato_ores_with_mc.forEach((element) => {
        thermal_press('alltheores:' + element + '_plate', 2, 'forge:ingots/' + element, 3, 3, 4800)
    })
    thermal_press('alltheores:diamond_plate', 1, 'forge:gems/diamond', 1, 3, 9600)
})