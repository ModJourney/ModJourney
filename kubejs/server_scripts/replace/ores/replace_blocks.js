// priority: 0
/*
ServerEvents.recipes(event => {
    let ato_ores_copy = ato_ores

    ato_ores_copy.forEach((element)=> {
        //werkstoff = erz // rohmaterial = e.g. gear
        output_replace(element, "storage")
        event.remove({output:"#forge:storage/blocks"})
        event.shapless('1x alltheores:' + element, "9x forge:ingot/" + element)
    })
    
    immersive_press("alltheores:")

})
*/