//priority 50

ServerEvents.recipes(event => {

    let plates = [
        'iron',
        'constantan',
        'invar',
        'electrum',
        'bronze',
        'nickel',
        'silver',
        'lead',
        'tin',
        'enderium',
        'lumium',
        'signalum',
        'copper',
        'gold'
    ]

    plates.forEach(plate => {

        event.forEachRecipe({id: "thermal:machines/press/press_" + plate + "_ingot_to_plate"},r => {
            r.json.get("result").get(0).add("item", "alltheores:" + plate + "_plate")
            event.custom(r.json).id(r.getId())
            console.log(r.json)
        })
    });


})