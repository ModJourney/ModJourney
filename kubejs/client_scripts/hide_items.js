// priority: 5

// Visit the wiki for more info - https://kubejs.com/
// Zum deaktivieren von JEI Rezepten, folgender Link: https://wiki.latvian.dev/books/kubejs-legacy/page/jei-integration
// Zusatz zur Item entfernung: https://kubejs.com/support/tickets/0BE90DD0
// weiterer Zusatz https://www.reddit.com/r/feedthebeast/comments/vc5xbq/using_kubejs_to_hide_items_in_jei_that_have_nbt/

console.info('Entfernen von JEI Rezepten')

const other_oreToRemove = [
    "aluminum",
    "lead",
    "nickel",
    "osmium",
    "platinum",
    "silver",
    "tin",
    "uranium",
    "zinc",
    "iridium",
    "coal",
    "copper",
    "emerald",
    "iron",
    "gold",
    "quartz",
    "redstone",
    "diamond",
    "lapis",
]

JEIEvents.hideItems(event => {

    other_oreToRemove.forEach((atm_ore) => {
        event.hide(`alltheores:other_${atm_ore}_ore`)
        event.hide(Item.of('ae2:facade', "{item:\"alltheores:other_" + atm_ore + "_ore\"}"))
    })

    event.hide(Item.of('mekanism:creative_chemical_tank')).ignoreNBT()

    //keine Veränderung. Dokumentation inkonsistent.
    event.hide('mekanism:creative_fluid_tank')

})

