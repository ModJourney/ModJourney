//priority 0

console.log('Ändern der Gated AdAstra Items')

ServerEvents.recipes(event => {

    // Coal generator
    event.replaceInput(
        { id: 'ad_astra:recipes/coal_generator' },         // Filterung nach Rezept-ID.
        'minecraft:iron_ingot',            // Das Item, was ersetzt werden soll.
        stages.stage1.core                 // Womit wird das Item ersetzt!
    )

    // Solar Panel
    event.replaceInput(
        { id: 'ad_astra:recipes/solar_panel' },         // Filterung nach Rezept-ID.
        'minecraft:blue_stained_glass',            // Das Item, was ersetzt werden soll.
        stages.stage1.core                 // Womit wird das Item ersetzt!
    )

    // Nasa Workbench
    event.replaceInput(
        { id: 'ad_astra:recipes/nasa_workbench' },         // Filterung nach Rezept-ID.
        'minecraft:redstone_block',            // Das Item, was ersetzt werden soll.
        stages.stage1.core                 // Womit wird das Item ersetzt!
    )

    // Energizer
    event.replaceInput(
        { id: 'ad_astra:recipes/energizer' },         // Filterung nach Rezept-ID.
        'minecraft:diamond',            // Das Item, was ersetzt werden soll.
        stages.stage1.core                 // Womit wird das Item ersetzt!
    )

    // Cable Duct
    event.replaceInput(
        { id: 'ad_astra:recipes/cable_duct' },         // Filterung nach Rezept-ID.
        'minecraft:copper_ingot',            // Das Item, was ersetzt werden soll.
        stages.stage1.core                 // Womit wird das Item ersetzt!
    )

    // Fluid Pipe Duct
    event.replaceInput(
        { id: 'ad_astra:recipes/fluid_pipe_duct' },         // Filterung nach Rezept-ID.
        'minecraft:glass',            // Das Item, was ersetzt werden soll.
        stages.stage1.core                 // Womit wird das Item ersetzt!
    )
    // Desh Fluid Pipe
    event.replaceInput(
        { id: 'ad_astra:recipes/desh_fluid_pipe' },         // Filterung nach Rezept-ID.
        'minecraft:glass',            // Das Item, was ersetzt werden soll.
        stages.stage1.core                 // Womit wird das Item ersetzt!
    )

    // Ostrum Fluid Pipe
    event.replaceInput(
        { id: 'ad_astra:recipes/ostrum_fluid_pipe' },         // Filterung nach Rezept-ID.
        'minecraft:glass',            // Das Item, was ersetzt werden soll.
        stages.stage1.core                 // Womit wird das Item ersetzt!
    )

        // Nasa Workbench
    event.replaceInput(
        { id: 'ad_astra:recipes/nasa_workbench' },         // Filterung nach Rezept-ID.
        'minecraft:redstone_block',            // Das Item, was ersetzt werden soll.
        stages.stage1.core                 // Womit wird das Item ersetzt!
    )

    // Energizer
    event.replaceInput(
        { id: 'ad_astra:recipes/energizer' },         // Filterung nach Rezept-ID.
        'minecraft:diamond',            // Das Item, was ersetzt werden soll.
        stages.stage1.core                 // Womit wird das Item ersetzt!
    )

    // Cable Duct
    event.replaceInput(
        { id: 'ad_astra:recipes/cable_duct' },         // Filterung nach Rezept-ID.
        'minecraft:copper_ingot',            // Das Item, was ersetzt werden soll.
        stages.stage1.core                 // Womit wird das Item ersetzt!
    )

    // Fluid Pipe Duct
    event.replaceInput(
        { id: 'ad_astra:recipes/fluid_pipe_duct' },         // Filterung nach Rezept-ID.
        'minecraft:glass',            // Das Item, was ersetzt werden soll.
        stages.stage1.core                 // Womit wird das Item ersetzt!
    )
    // Desh Fluid Pipe
    event.replaceInput(
        { id: 'ad_astra:recipes/desh_fluid_pipe' },         // Filterung nach Rezept-ID.
        'minecraft:glass',            // Das Item, was ersetzt werden soll.
        stages.stage1.core                 // Womit wird das Item ersetzt!
    )

    // Ostrum Fluid Pipe
    event.replaceInput(
        { id: 'ad_astra:recipes/ostrum_fluid_pipe' },         // Filterung nach Rezept-ID.
        'minecraft:glass',            // Das Item, was ersetzt werden soll.
        stages.stage1.core                 // Womit wird das Item ersetzt!
    )

    // Fuel Refinery
    event.replaceInput(
        { id: 'ad_astra:recipes/fuel_refinery' },         // Filterung nach Rezept-ID.
        'minecraft:bucket',            // Das Item, was ersetzt werden soll.
        stages.stage1.core                 // Womit wird das Item ersetzt!
    )

    // Oxygen Loader
    event.replaceInput(
        { id: 'ad_astra:recipes/oxygen_loader' },         // Filterung nach Rezept-ID.
        'minecraft:redstone_block',            // Das Item, was ersetzt werden soll.
        stages.stage1.core                 // Womit wird das Item ersetzt!
    )


})
