//priority 10

ServerEvents.recipes(event => {

event.shaped(
    Item.of('mod_journey:blank_scroll', 1),
    [
      'ABA',
      ' C ',
      'ABA'
    ],
    {
      A: '#minecraft:wooden_buttons',
      B: '#forge:rods/wooden',
      C: 'minecraft:paper'
    }
  ).id('modjourney:blank_scroll')

  for (let i = 1; i <= 8; i++) {
    event.shapeless(

        Item.of('mod_journey:scroll' + i, 1),
        [
            i + 'x #forge:dyes/black',
            'mod_journey:blank_scroll'
        ]
    ).id("modjourney:scroll/" + i)
  }

  event.shapeless(
    Item.of('mod_journey:scroll9', 1),
    [
        '#modjourney:rolls_crafting'
    ]
  ).id("modjourney:scroll/9")


    event.custom({
        "type": "industrialforegoing:laser_drill_fluid",
        "catalyst": {
        "item": "industrialforegoing:laser_lens2"
    },
        "entity": "minecraft:empty",
        "output": "{Amount:100,FluidName:\"minecraft:water\"}",
        "pointer": 0,
        "rarity": [
        {
            "blacklist": {},
            "depth_max": 65,
            "depth_min": 5,
            "weight": 8,
            "whitelist": {
                "type": "minecraft:worldgen/biome",
                "values": [
                    "minecraft:ocean",
                    "minecraft:warm_ocean",
                    "minecraft:lukewarm_ocean",
                    "minecraft:frozen_ocean",
                    "minecraft:deep_ocean",
                    "minecraft:deep_warm_ocean",
                    "minecraft:deep_lukewarm_ocean",
                    "minecraft:deep_frozen_ocean"
                ]
            }
        }
    ]
    })
})