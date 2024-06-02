// priority: 0

ServerEvents.recipes(event => {

    let entfernen = [
        'aeinfinitybooster:dimension_card',
        'ae2:creative_energy_cell',
        Item.of('expatternprovider:infinity_cell', '{record:{"#c":"ae2:f",id:"minecraft:water"}}'),
        Item.of('expatternprovider:infinity_cell', '{record:{"#c":"ae2:i",id:"minecraft:cobblestone"}}'),
    ]


    entfernen.forEach((element) => {
        event.remove({ 
            output: element
        })
    });
    
})