ServerEvents.recipes(event => {
    // Remove all seeds, but keep inferium
    event.remove({type: 'mysticalagriculture:infusion', output: '#mysticalagriculture:seeds'})

    // Remove harvester
    event.remove({id: 'mysticalagriculture:harvester'})

/* // DEBUG
    event.forEachRecipe({ output: '#mysticalagriculture:seeds' }, r => {
        console.log(r.json.get('type') + ": " +r.getId())
    })
*/
})

