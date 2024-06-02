// priority: 5

//https://kubejs.com/wiki/addons/built-in/jei

// priority: 0

JEIEvents.hideItems(event => {

  //Mob_Grinding_Utils
  event.hide('mob_grinding_utils:mob_swab_used')
  event.hide('mob_grinding_utils:ender_inhibitor_off')
  event.hide('mob_grinding_utils:dreadful_dirt')
  event.hide('mob_grinding_utils:delightful_dirt')
  event.hide('mob_grinding_utils:rotten_egg')
  event.hide('mob_grinding_utils:golden_egg')
  event.hide(Item.of('mob_grinding_utils:monocle', '{Damage:0}'))
  event.hide('mob_grinding_utils:nutritious_chicken_feed') 
  event.hide('mob_grinding_utils:gm_chicken_feed_cursed')
  event.hide('mob_grinding_utils:dark_oak_stone')
})