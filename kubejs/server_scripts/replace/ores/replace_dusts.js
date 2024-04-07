// priority: 0

ServerEvents.recipes(event => {
  
    //Recycling: mc_ores und ato_ores zu dust, ohne Legierungen
    forge_ores_2.forEach(element => {
      mekka_enriching("alltheores:" + element + "_dust", 2, "forge:ores/" + element, 1)
      mekka_enriching("alltheores:" + element + "_dust", 12, "forge:storage_blocks/raw_" + element, 1)
      mekka_enriching("alltheores:" + element + "_dust", 4, "forge:raw_materials/" + element, 3)
      mekka_crushing("alltheores:" + element + "_dust", 1, "forge:ingots/" + element, 1)
      thermal_pulverizing("alltheores:" + element + "_dust", element)
      //industrial legierungsofen und pulverisierer fehlen
    });
  
    //Recycling: smaragd und diamond
    forge_gems_2.forEach(element => {
      mekka_crushing("mekanism:dust_" + element, 1, "forge:gems/" + element, 1)
      crusher_complete_free("mekanism:dust_" + element, 1,"forge:gems/" + element, 1)
    });
  
    //Recycling: Legierung zu Dust
    legierungen.forEach((element) => {
      mekka_crushing("alltheores:" + element + "_dust", 1,"forge:ingots/" + element, 1)
      mekka_crushing("alltheores:" + element + "_dust", 1,"forge:rods/" + element, 1)
      mekka_crushing("alltheores:" + element + "_dust", 1,"forge:gears/" + element, 1)
      mekka_crushing("alltheores:" + element + "_dust", 1,"forge:plates/" + element, 1)
      crusher_complete_free("alltheores:" + element + "_dust", 1,"forge:ingots/" + element, 1)
      crusher_complete_free("alltheores:" + element + "_dust", 1,"forge:rods/" + element, 1)
      crusher_complete_free("alltheores:" + element + "_dust", 1,"forge:gears/" + element, 1)
      crusher_complete_free("alltheores:" + element + "_dust", 1,"forge:plates/" + element, 1)
    });
    
    forge_ores_2.forEach((element) => {
        event.replaceOutput({output: 'forge:dusts/'+ element}, 'forge:dusts/'+ element, 'alltheores:' + element + '_dust')
    })

})