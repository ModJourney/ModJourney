// priority: 95

// In diesem Skript werden Plates, Rods und Gears auf ATO vereinheitlicht. 
// Craftingrezepte mittels Craftingfeld werden entfernt. Alle weiteren sind
// in den Pressen aus Thermal und Immersive herstellbar. 

ServerEvents.recipes(event => {

  var cahnge_thermal_press = (werkstoff) => {
    advanced_atos.forEach(element => {
        event.forEachRecipe({type: 'thermal:press', id: "thermal:machines/press/press_" + element + "_ingot_to_" + werkstoff}, r => {
          let json = r.json;
          let output = r.json.get("result").get(0)
          output.add( "item", 'alltheores:' + element + '_' + werkstoff)
          event.custom(r.json).id(r.getId())
        })
    });
  };

  cahnge_thermal_press("gear")
  cahnge_thermal_press("plate")

  
  //Bezug aus helperfunctions.js
  advanced_atos.forEach(element => {
    thermal_presse(
      "forge:ingots/" + element, 1,           //Input Item, Count
      'immersiveengineering:mold_rod',        //Second Input: Mold
      "alltheores:" + element + "_rod",       //result Item
      "thermal:ingots_into_rods/" + element   //Recipe ID, only a-z and _ and / and :
    )
    thermal_presse(
      "forge:ingots/" + element, 1,
      "immersiveengineering:mold_plate",
      "alltheores:" + element + "_plate",
      "thermal:ingots_into_plates/" + element
    )
  });


})
