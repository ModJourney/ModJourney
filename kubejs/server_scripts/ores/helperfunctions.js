// priority: 99

    /**
     * @example thermal_press("forge:ingots/iron", 2, "immersive:mold_gear", "ato:iron_gear")
     * @param {String}  input_item  Das Eingabe Item als TAG wird erwartet.
     * @param {Integar} input_count Die Eingabe als Ganzzahl wird erwartet.
     * @param {String}  press_gear  Eine Mold zum Pressen auswählen.
     * @param {String} result_item  Das zu erwartende Endprodukt als Item-ID angeben.
     * @param {String} recipename   Den Rezeptname angeben (Rezept_ID generieren).
     */
    var thermal_presse

ServerEvents.recipes(event => {

    thermal_presse = (input_item, input_count, press_gear, result_item, recipename) => { 
        event.custom({
        "type": "thermal:press",
        "ingredients": [
            {
            "tag": input_item,
            "count": input_count
            },
            {
            "item": press_gear
            }
        ],
        "result": [{"item": result_item }]
        }).id(recipename)
    }


})