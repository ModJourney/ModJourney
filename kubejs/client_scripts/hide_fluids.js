// priority: 5

JEIEvents.hideFluids(event => {

    //keine Veränderung. Dokumentation inkonsistent.
    event.hide(Item.of('mekanism:creative_fluid_tank')).ignoreNBT()
    
})
