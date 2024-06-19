//priority 0

console.log('Ändern der Gated Thermal Items')

ServerEvents.recipes(event => {

    event.replaceInput(
        { id: 'thermal:rf_coil' },         // Filterung nach Rezept-ID.
        'minecraft:gold_ingot',            // Das Item, was ersetzt werden soll.
        stages.stage1.core                 // Womit wird das Item ersetzt!
    )

    event.replaceInput(
        { id: 'thermal:redstone_servo' },
        'minecraft:iron_ingot',
        stages.stage1.core
    )

})