ServerEvents.recipes(event => {

    // TNT Thermal Series
    let tnt = [
        'thermal:detonator',
        'thermal:explosive_grenade',
        'thermal:fire_tnt',
        'thermal:ice_tnt',
        'thermal:lightning_tnt',
        'thermal:earth_tnt',
        'thermal:ender_tnt',
        'thermal:glowstone_tnt',
        'thermal:redstone_tnt',
        'thermal:slime_tnt',
        'thermal:phyto_tnt',
        'thermal:nuke_tnt'
    ]

    // Funktionsaufruf zum entfernen der Linsen
    tnt.forEach(element => {
        event.remove({ output: element});
    });

    // Enfernen der Florb
    event.remove({output: 'thermal:florb'})
})
