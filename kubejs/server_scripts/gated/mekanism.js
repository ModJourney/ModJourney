//priority 0


ServerEvents.recipes(event => {

    // Void Chassis
    event.replaceInput(
        { id: 'mekanism:steel_casing' },         // Filterung nach Rezept-ID.
        'alltheores:osmium_ingot',            // Das Item, was ersetzt werden soll.
        stages.stage3.core                 // Womit wird das Item ersetzt!
    )

})
