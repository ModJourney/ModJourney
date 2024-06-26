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

    let immersive_rods = [
        'immersiveengineering:stick_aluminum',
        'immersiveengineering:stick_steel',
        'immersiveengineering:stick_iron'
    ]

    immersive_rods.forEach(element => {
        event.remove({output: element})
    });


    let immersive_plates = [
        'immersiveengineering:plate_copper',
        'immersiveengineering:plate_aluminum',
        'immersiveengineering:plate_lead',
        'immersiveengineering:plate_silver',
        'immersiveengineering:plate_nickel',
        'immersiveengineering:plate_uranium',
        'immersiveengineering:plate_constantan',
        'immersiveengineering:plate_electrum',
        'immersiveengineering:plate_steel',
        'immersiveengineering:plate_iron',
        'immersiveengineering:plate_gold'
    ]

    immersive_plates.forEach(element => {
        event.remove({output: element})
    });


    let industrial_gears = [
        'industrialforegoing:iron_gear',
        'industrialforegoing:gold_gear',
        'industrialforegoing:diamond_gear'
    ]

    industrial_gears.forEach(element => {
        event.remove({output: element})
    });


    let thermal_gears = [
        'thermal:lapis_gear',
        'thermal:diamond_gear',
        'thermal:emerald_gear',
        'thermal:quartz_gear',
        'thermal:ruby_gear',
        'thermal:sapphire_gear',
        'thermal:iron_gear',
        'thermal:gold_gear',
        'thermal:copper_gear',
        'thermal:electrum_gear',
        'thermal:invar_gear',
        'thermal:invar_gear',
        'thermal:constantan_gear',
        'thermal:netherite_gear',
        'thermal:signalum_gear',
        'thermal:lumium_gear',
        'thermal:enderium_gear',
        'thermal:tin_gear',
        'thermal:lead_gear',
        'thermal:silver_gear',
        'thermal:nickel_gear',
        'thermal:bronze_gear'
    ]

    thermal_gears.forEach(element => {
        event.remove({output: element})
    });


    let coins = [
        'thermal:tin_coin',
        'thermal:lead_coin',
        'thermal:silver_coin',
        'thermal:nickel_coin',
        'thermal:bronze_coin',
        'thermal:electrum_coin',
        'thermal:invar_coin',
        'thermal:constantan_coin',
        'thermal:iron_coin',
        'thermal:gold_coin',
        'thermal:copper_coin',
        'thermal:netherite_coin',
        'thermal:signalum_coin',
        'thermal:lumium_coin',
        'thermal:enderium_coin',
        'thermal:press_coin_die'
    ]

    coins.forEach(element => {
        event.remove({output: element})
    });

})
