//priority 0

console.log('Ändern der Gated Powah Items')

ServerEvents.recipes(event => {

    // Dielectric Casing 
    event.replaceInput(
        { id: 'powah:crafting/dielectric_casing' },         // Filterung nach Rezept-ID.
        'minecraft:iron_ingot',            // Das Item, was ersetzt werden soll.
        stages.stage2.core                 // Womit wird das Item ersetzt!
    )

    
    // Basic Capacitor 
    event.replaceInput(
        { id: 'powah:crafting/capacitor_basic' },         // Filterung nach Rezept-ID.
        'minecraft:redstone_block',            // Das Item, was ersetzt werden soll.
        stages.stage2.core                 // Womit wird das Item ersetzt!
    )

})