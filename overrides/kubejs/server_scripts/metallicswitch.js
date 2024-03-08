// priority: 0

/*event.replaceInput(
    { input: 'thermal:diamond_gear' }, // Arg 1: the filter
    'thermal:diamond_gear',            // Arg 2: the item to replace
    'alltheores:diamond_gear'         // Arg 3: the item to replace it with
    // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
  )*/
 
  //alltheores:${ato} --> e.g. PLATES/GEARS/ORE/ETC.
 /*ato = [
    "aluminum",
    "brass",
    "bronze",
    "constantan",
    "copper",
    "diamond",
    "electrum",
    "enderium",
    "gold",
    "invar",
    "iridium",
    "iron",
    "lead",
    "lumium",
    "nickel",
    "osmium",
    "platinum",
    "signalum",
    "silver",
    "steel",
    "tin",
    "uranium",
    "zinc"
 ] */
 
//industrialforegoing:${ifg_gear}_gear
const ifg_gear = [
    "diamond",
    "gold",
    "iron"
]

//thermal:${thermal_gear}_gear
const thermal_gear = [
    "bronze",
    "constantan",
    "copper",
    "diamond",
    "electrum",
    "emerald",
    "enderium",
    "gold",
    "invar",
    "iron",
    "lead",
    "lumium",
    "nickel",
    "signalum",
    "silver",
    "tin",
    //"quartz",
    //"ruby",
    //"sapphire",
    //"netherite",
    //"lapis"
]

//immersiveengineering:plate_${immersive_plates}
const immersive_plates = [
    "aluminum",
    "constantan",
    "copper",
    "electrum",
    "gold",
    "iron",
    "lead",
    "nickel",
    "silver",
    "steel",
    "uranium"
]

//thermal:${thermal_plates}_plate
const thermal_plates = [
    "bronze",
    "constantan",
    "copper",
    "electrum",
    "enderium",
    "gold",
    "invar",
    "iron",
    "lead",
    "lumium",
    "netherite",
    "nickel",
    "signalum",
    "silver",
    "tin"    
]

ServerEvents.recipes(event => {

    //umschreiben der Zahnräder 
    thermal_gear.forEach((gearz) => {
        event.replaceInput({input: `thermal:${gearz}_gear`}, `thermal:${gearz}_gear`, `alltheores:${gearz}_gear`)
    })

    ifg_gear.forEach((gearz) => {
        event.replaceInput({input: `industrialforegoing:${gearz}_gear`}, `industrialforegoing:${gearz}_gear`, `alltheores:${gearz}_gear`)
    })

    //umschreiben der Platten
    immersive_plates.forEach((platez) => {
        event.replaceInput({input: `immersiveengineering:plate_${platez}`}, `immersiveengineering:plate_${platez}`, `alltheores:${platez}_plate`)
    })

    thermal_plates.forEach((platez) => {
        event.replaceInput({input: `thermal:${platez}_plate`}, `thermal:${platez}_plate`, `alltheores:${platez}_plate`)
    })  



})

//untagging 
ServerEvents.tags('item', event => {

    //immersive Platten werden umgetaggt
    immersive_plates.forEach((platez) => {
        event.removeAllTagsFrom(`immersiveengineering:plate_${platez}`)
        event.add(`remove:immersive_${platez}`, `immersiveengineering:plate_${platez}`)
        event.add('remove:items', `immersiveengineering:plate_${platez}`)

    })
  })



  /* 
  Metalle zu Platten via !crafting, metallpresse (immersive & thermal
  Metalle zu Zahnrädern !crafting, metallpresse (immersive & thermal
  Nuggets zu Ingots
  Ingots zu Blöcken 
  raw metall to dust, ingot
  
    */

 // silikon EnderIo ersetzen durch applied silicon