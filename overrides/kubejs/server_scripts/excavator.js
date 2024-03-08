// priority: 0

const other_oreToUntag = [
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
  "lapis"
]

ServerEvents.tags('item', event => {
  other_oreToUntag.forEach((other) => {
      event.removeAllTagsFrom(`alltheores:other_${other}_ore`)
      event.add(`remove:other_${other}`, `alltheores:other_${other}_ore`) 
  })
})