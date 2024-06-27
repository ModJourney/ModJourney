//priority 0

console.log('Ändern der Gated EnderIO Items')

ServerEvents.recipes(event => {

    // Void Chassis
    event.replaceInput(
        { id: 'enderio:void_chassis' },         // Filterung nach Rezept-ID.
        'enderio:grains_of_infinity',            // Das Item, was ersetzt werden soll.
        stages.stage2.core                 // Womit wird das Item ersetzt!
    )

    // Primitive Alloy Smelter
    event.replaceInput(
        { id: 'enderio:primitive_alloy_smelter' },   // Filterung nach Rezept-ID.
        'enderio:grains_of_infinity',             // Das Item, was ersetzt werden soll
        stages.stage2.core                  // Womit wird das Item ersetzt!
    )

    // Conduid Binder Composite
    event.replaceInput(
        { id: 'enderio:conduit_binder_composite' },   // Filterung nach Rezept-ID.
        'minecraft:clay_ball',             // Das Item, was ersetzt werden soll
        stages.stage2.core                  // Womit wird das Item ersetzt!
    )


})
