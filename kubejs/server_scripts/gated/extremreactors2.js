//priority 0

console.log('Ändern der Gated ExtremeReactors2 Items')

ServerEvents.recipes(event => {

    // Reactor Controller Basis Yellorium
    event.replaceInput(
        { id: 'bigreactors:reactor/basic/controller_ingots_yellorium' },         // Filterung nach Rezept-ID.
        'minecraft:diamond',            // Das Item, was ersetzt werden soll.
        stages.stage2.core                 // Womit wird das Item ersetzt!
    )


    // Void Chassis Basis Uranium
    event.replaceInput(
        { id: 'bigreactors:reactor/basic/controller_ingots_uranium' },         // Filterung nach Rezept-ID.
        'minecraft:diamond',            // Das Item, was ersetzt werden soll.
        stages.stage2.core                 // Womit wird das Item ersetzt!
    )

})