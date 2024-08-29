//priority 10

ServerEvents.recipes(event => {

    event.shapeless(
        Item.of('mod_journey:anti_ingot', 1),
        [
            '9x mekanism:pellet_antimatter'
        ]
    ).id("modjourney:shapless/antimatter_ingot")


    event.shapeless(
        Item.of('mod_journey:antimatter_block', 1),
        [
            '9x mod_journey:anti_ingot'
        ]
    ).id("modjourney:shapless/antimatter_block")
})