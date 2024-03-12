// priority: 0
 


ServerEvents.recipes(event => {

    //umschreiben der Zahnräder als Input
    thermal_gear.forEach((gearz) => {
        event.replaceInput({input: `thermal:${gearz}_gear`}, `thermal:${gearz}_gear`, `alltheores:${gearz}_gear`)
    })

    ifg_gear.forEach((gearz) => {
        event.replaceInput({input: `industrialforegoing:${gearz}_gear`}, `industrialforegoing:${gearz}_gear`, `alltheores:${gearz}_gear`)
    })

    //umschreiben der Platten als Input
    immersive_plates.forEach((platez) => {
        event.replaceInput({input: `immersiveengineering:plate_${platez}`}, `immersiveengineering:plate_${platez}`, `alltheores:${platez}_plate`)
    })

    thermal_plates.forEach((platez) => {
        event.replaceInput({input: `thermal:${platez}_plate`}, `thermal:${platez}_plate`, `alltheores:${platez}_plate`)
    })

    //umschreiben der Gears und Platten als Output
    thermal_gear.forEach((element) => {
        event.replaceOutput({},"thermal:" + element + "_plate","alltheores:" + element + "_plate")
        event.replaceOutput({},"thermal:" + element + "_gear","alltheores:" + element + "_gear")
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