// priority: 0

//Entfernt die Rezepte für das Handcraften von Rods, Gears und Platten

ServerEvents.recipes(event => {

    advanced_atos.forEach(element => {
        event.remove(
            [{
                type:"minecraft:crafting_shaped", 
                output:"alltheores:" + element + "_rod"
            }, 
            {
                type:"minecraft:crafting_shapeless", 
                output:"alltheores:" + element + "_rod"
            }]
        )
        event.remove(
            [{
                type:"minecraft:crafting_shaped", 
                output:"alltheores:" + element + "_gear"
            }, 
            {
                type:"minecraft:crafting_shapeless",
                output:"alltheores:" + element + "_gear"
            }]
        )
        event.remove(
            [{
                type:"minecraft:crafting_shaped", 
                output:"alltheores:" + element + "_plate"
            },
            {
                type:"minecraft:crafting_shapeless", 
                output:"alltheores:" + element + "_plate"
            }]
        )
    });
})
