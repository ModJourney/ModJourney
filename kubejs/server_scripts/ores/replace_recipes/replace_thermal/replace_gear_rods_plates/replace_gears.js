//priority 50

ServerEvents.recipes(event => {

    let gears = [
        'iron',
        'constantan',
        'invar',
        'electrum',
        'bronze',
        'nickel',
        'silver',
        'lead',
        'tin',
        'diamond',
        'enderium',
        'lumium',
        'signalum',
        'copper',
        'gold'
    ]
    gears.forEach(gear => {

        event.replaceOutput({ output: "thermal:" + gear + "_gear"}, "thermal:" + gear + "_gear", "alltheores:" + gear + "_gear" );

        event.forEachRecipe({id: "thermal:machines/press/press_" + gear + "_ingot_to_gear"},r => {
            r.json.get("result").get(0).add("item", "alltheores:" + gear + "_gear")
            event.custom(r.json).id(r.getId())
            console.log(r.json)
        })
    });


})