ServerEvents.recipes(event => {

    //enfernt alle infinity crafting Rezepte
    let infinity_stuff = [
        'saw',
        'hammer',
        'trident',
        'backpack',
        'launcher',
        'nuke'
    ]
    infinity_stuff.forEach(element => {
        event.remove({ output: Item.of('industrialforegoing:infinity_' + element).ignoreNBT() })
    });
})

