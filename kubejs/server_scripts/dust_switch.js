// priority: 0

ServerEvents.recipes(event => {

  //remove Rezepte nach Tag Dust
  let del_recipe_tree = (element) => {
    event.remove({output: "#forge:dusts/" + element, mod: 'mekanism'})
    event.remove({output: "#forge:dusts/" + element, mod: 'thermal'})
    event.remove({output: "#forge:dusts/" + element, mod: 'immersiveengineering'})
    event.remove({output: "#forge:dusts/" + element, mod: 'alltheores'})
  }

  //mc_ores und ato_ores zu dust, ohne Legierungen
  forge_ores_2.forEach(element => {
    del_recipe_tree(element)
    mekka_enriching("alltheores:" + element + "_dust", 2, "forge:ores/" + element, 1)
    mekka_enriching("alltheores:" + element + "_dust", 12, "forge:storage_blocks/raw_" + element, 1)
    mekka_enriching("alltheores:" + element + "_dust", 4, "forge:raw_materials/" + element, 3)
    mekka_crushing("alltheores:" + element + "_dust", 1, "forge:ingots/" + element, 1)
    thermal_pulverizing("alltheores:" + element + "_dust", element)
    //industrial legierungsofen und pulverisierer fehlen
  });

  //smaragd und diamond
  forge_gems_2.forEach(element => {
    del_recipe_tree(element)
    mekka_crushing("mekanism:dust_" + element, 1, "forge:gems/" + element, 1)
    crusher_complete_free("mekanism:dust_" + element, 1,"forge:gems/" + element, 1)
  });

  //Legierung zu Dust
  legierungen.forEach((element) => {
    del_recipe_tree(element)
    mekka_crushing("alltheores:" + element + "_dust", 1,"forge:ingots/" + element, 1)
    mekka_crushing("alltheores:" + element + "_dust", 1,"forge:rods/" + element, 1)
    mekka_crushing("alltheores:" + element + "_dust", 1,"forge:gears/" + element, 1)
    mekka_crushing("alltheores:" + element + "_dust", 1,"forge:plates/" + element, 1)
    crusher_complete_free("alltheores:" + element + "_dust", 1,"forge:ingots/" + element, 1)
    crusher_complete_free("alltheores:" + element + "_dust", 1,"forge:rods/" + element, 1)
    crusher_complete_free("alltheores:" + element + "_dust", 1,"forge:gears/" + element, 1)
    crusher_complete_free("alltheores:" + element + "_dust", 1,"forge:plates/" + element, 1)
  });

 
  //forge_ores_6.forEach(element => {
    //sägemühle enderIO erz zu 2 Netherquarz 1 x dust und ein Netherrack 2400 pikoI
    //sägemühle enderIO Netherquarz zu 2 dust
    //zerkleinerer meka 1 Netherquarz zu ein dust
    //pulverisierer thermal 2 andesit zu 2 cobble np: 1 dust 4000 rf
    //pullverisierer thermal 1 granit zu 1 coblle und np: 2 dust 4000 rf
    //pullverisierer thermal 1 diorit zu 1 cobble und np: 1 dust 400 rf
    //pullverisierer thermal 1 quarz zu 1 dust
  //});
  
  /*schleife für legierungen mit zwei Zutaten(
      pulverisierer, zerkleinerer: Ingot, platte, zahnrad, "infusionsanlage" <<Extra
      Bronze    (3 Kupfer und 1 Tinn) = 3 stk
      Invar     (3 Eisen und 1 Nickel) = 3 stk
      Brass     (3 Kupfer und 1 Zinc) = 3 stk
      Electrum  (3 Gold und 1 Silber) = 3 stk
      constantan(3 kupfer und 1 nickel)= 3 stk
  )*/

    /*schleife für legierungen mit drei Zutaten(
       Enderium (4 ender dust, 4 lead dust, 1 diamond dust) = 4stk
       Lumium   (4 glowstone dust, 4 tin dust, 1 silver) = 4stk
       Signalum (4 copper dust, 4 redstone dust, 1 silver) = 4stk
  )*/
})

//verwandeln in DUST
  //anreicherungskammer:
      //Dreckiger staub 1:1 abhänging siehe tags_add
      // Erz 1:2   FERTIG
      // raw block 1:12 Fertig
      // raw 3:4 FERTIG

  //Zerkleinerer:
      //ingot 1:1 FERTIG

//Verwandeln in Ingot
  //crafting:
      //Nugget 9:1
      //Block 1:9

  //Ofen
      //Erz 1:1
      //Raw 1/1
      //Dust 1:1
    
//Legierungen mit einfügen
  //pulverisierer
  //induktionsschmelze


  /* Fluid Sieving Machine*/
  /* thermal:niter_dust (salpeter) implementieren */