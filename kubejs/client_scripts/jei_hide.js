// priority: 5

JEIEvents.hideItems(event => {

  //Mob_Grinding_Utils
  const mob_grinding = [
    'mob_swab_used',
    'ender_inhibitor_off',
    'dreadful_dirt',
    'delightful_dirt',
    'rotten_egg',
    'golden_egg',
    'monocle',
    'nutritious_chicken_feed',
    'gm_chicken_feed_cursed',
    'dark_oak_stone',
  ]

  mob_grinding.forEach((element) => {
    event.hide(Item.of('mob_grinding_utils:' + element).ignoreNBT())
  });
  

  //Structure_gel API Build Mod
  const structure_api = [
    'dynamic_spawner',
    'red_gel',
    'blue_gel',
    'green_gel',
    'cyan_gel',
    'orange_gel',
    'building_tool',
    'yellow_gel',
    'data_handler'
  ]

  structure_api.forEach((element) => {
    event.hide(Item.of('structure_gel:' + element).ignoreNBT())
  });


  //RFT Tools
  const remove = [
    'advanced_charged_porter',
    'charged_porter',
    'teleport_probe',
    'creative_screen',
    'matter_booster',
    'tank',
    'matter_beamer',
    'flight_module',
    'luck_module',
    'peaceful_module',
    'spawner',
    'destination_analyzer',
    'dialing_device',
    'matter_receiver',
    'matter_transmitter',
    'syringe'
  ]

  remove.forEach((element) => {
    event.hide (Item.of('rftoolsutility:' + element).ignoreNBT())
  });
  
  //Industrial Foregoing
  const infinty_hide = [
    'saw',
    'hammer',
    'trident',
    'backpack',
    'launcher',
    'nuke',
    'infinity_drill'
  ]

  infinty_hide.forEach((element) => {
    event.hide (
      Item.of('industrialforegoing:infinity_' + element).ignoreNBT()
    )
  });


  //alltheores - Other Ores werden removed
  const other_oreToRemove = [
    "aluminum",
    "lead",
    "nickel",
    "osmium",
    "platinum",
    "silver",
    "tin",
    "uranium",
    "zinc",
    "iridium",
    "coal",
    "copper",
    "emerald",
    "iron",
    "gold",
    "quartz",
    "redstone",
    "diamond",
    "lapis",
  ]

  other_oreToRemove.forEach((atm_ore) => {
      event.hide(`alltheores:other_${atm_ore}_ore`)
      event.hide(Item.of('ae2:facade', "{item:\"alltheores:other_" + atm_ore + "_ore\"}"
    ))
  })

  event.hide(Item.of('mekanism:creative_chemical_tank')).ignoreNBT()
      
})