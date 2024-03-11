// priority: 10

const dirty_dust_mek = ["lead", "osmium", "tin", "uranium"];
var del_tags_add_remove 



ServerEvents.tags('item', event => {

    del_tags_add_remove = (rohmaterial, werkstoff) => {
        let mods_name_1 = ["immersiveengineering", "mekanism"];
        let mods_name_2 = ["thermal"]
        mods_name_1.forEach((element) => {
            event.removeAllTagsFrom(element + ':' + werkstoff + '_' + rohmaterial)
            event.add('remove:' + element + '_' + rohmaterial, element + ':' + werkstoff + '_' + rohmaterial)
            event.add('remove:item', element + ':' + werkstoff + '_' + rohmaterial)
        })
        mods_name_2.forEach((element) => {
            event.removeAllTagsFrom(element + ':' + rohmaterial + '_' + werkstoff)
            event.add('remove:' + element + '_' + rohmaterial, element + ':' + rohmaterial + '_' + werkstoff)
            event.add('remove:item', element + ':' + rohmaterial + '_' + werkstoff)
        })
    };

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
})