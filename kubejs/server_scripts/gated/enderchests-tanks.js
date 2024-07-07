//priority 0

console.log('Ändern der Gated Enderchest Items')

ServerEvents.recipes(event => {

    // Enderchest
    event.replaceInput(
        { id: 'enderchests:ender_pouch' },         // Filterung nach Rezept-ID.
        'minecraft:leather',            // Das Item, was ersetzt werden soll.
        stages.stage1.core                 // Womit wird das Item ersetzt!
    )

    // @todo prüfen wieso das nicht geht
    // EnderTank
    event.replaceInput(
        { id: 'endertanks:tank' },         // Filterung nach Rezept-ID.
        'minecraft:blaze_rod',            // Das Item, was ersetzt werden soll.
        stages.stage1.core                 // Womit wird das Item ersetzt!
    )

    // @todo prüfen wieso das nicht geht
    // EnderBucket
    event.replaceInput(
        { id: 'endertanks:ender_tank' },         // Filterung nach Rezept-ID.
        'minecraft:blaze_rod',            // Das Item, was ersetzt werden soll.
        stages.stage1.core                 // Womit wird das Item ersetzt!
    )

})
