//priority 95

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

})