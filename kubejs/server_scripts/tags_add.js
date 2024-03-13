// priority: 100

const dirty_dust_mek = ["lead", "osmium", "tin", "uranium"];

ServerEvents.tags('item', event => {

    //dreckiger Staub vereinheitlichen. Meka dirty Dusts raus und auf ATO item angewendet /meka/tag (vorhanden)
    dirty_dust_mek.forEach((tagged) => {
        event.removeAllTagsFrom(`mekanism:dirty_dust_${tagged}`)
        event.add(`mekanism:dirty_dusts/${tagged}`, `alltheores:dirty_${tagged}_dust`)
        event.add('mekanism:dirty_dusts', `alltheores:dirty_${tagged}_dust`)
    })

    //immersive Platten werden umgetaggt
    immersive_plates.forEach((platez) => {
        event.removeAllTagsFrom(`immersiveengineering:plate_${platez}`)
        event.add(`remove:immersive_${platez}`, `immersiveengineering:plate_${platez}`)
        event.add('remove:items', `immersiveengineering:plate_${platez}`)
    })

    //thermal Platten umtaggen
    thermal_plates.forEach((platez) => {
        event.removeAllTagsFrom(`thermal:${platez}_plate`)
        event.add(`remove:thermal_${platez}`, `thermal:${platez}_plate`)
        event.add('remove:items', `thermal:${platez}_plate`)
    })

    //thermal gears umtaggen
    thermal_gear.forEach((gearz) => {
        event.removeAllTagsFrom(`thermal:${gearz}_gear`)
        event.add(`remove:thermal_${gearz}`, `thermal:${gearz}_gear`)
        event.add('remove:items', `thermal:${gearz}_gear`)
    })
    
    //industrial gears umtaggen
    ifg_gear.forEach((gearz) => {
        event.removeAllTagsFrom(`industrialforegoing:${gearz}_gear`)
        event.add(`remove:industrialforegoing_${gearz}`, `industrialforegoing:${gearz}_gear`)
        event.add('remove:items', `industrialforegoing:${gearz}_gear`)
    })

    event.add('thermal:crafting/dies', 'immersiveengineering:mold_gear')
})