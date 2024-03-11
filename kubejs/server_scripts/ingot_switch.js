// priority: 0

ServerEvents.tags('item', event => {



    forge_ores_2.forEach((material) => {
        del_tags_add_remove(material, 'ingot')
    })
    legierungen.forEach((material) => {
        del_tags_add_remove(material, 'ingot')
    })


})