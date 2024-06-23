//priority 0

console.log('Ändern der Gated Ironjetpacks Items')

ServerEvents.recipes(event => {

    // Basic Coil - Stage 2
    event.replaceInput(
        { id: 'ironjetpacks:basic_coil' },         // Filterung nach Rezept-ID.
        'minecraft:stick',            // Das Item, was ersetzt werden soll.
        stages.stage1.core                 // Womit wird das Item ersetzt!
    )

    // Advanced Coil - Stage 3
    event.replaceInput(
        { id: 'ironjetpacks:advanced_coil' },         // Filterung nach Rezept-ID.
        'minecraft:stick',            // Das Item, was ersetzt werden soll.
        stages.stage2.core                 // Womit wird das Item ersetzt!
    )

    // Elite Coil - Stage 4
    event.replaceInput(
        { id: 'ironjetpacks:elite_coil' },         // Filterung nach Rezept-ID.
        'minecraft:stick',            // Das Item, was ersetzt werden soll.
        stages.stage3.core                 // Womit wird das Item ersetzt!
    )


   // Ultimate Coil - Stage 4
    event.replaceInput(
        { id: 'ironjetpacks:ultimate_coil' },         // Filterung nach Rezept-ID.
        'minecraft:stick',            // Das Item, was ersetzt werden soll.
        stages.stage3.core                 // Womit wird das Item ersetzt!
    )


})


   

   