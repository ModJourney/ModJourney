// priority: 0

console.info('Hello, World! (Loaded startup scripts)')

ItemEvents.modification(event => {

    event.modify('mob_grinding_utils:saw_upgrade_looting', item => {
      item.maxStackSize = 3
      item.fireResistant = true
    })
    
    event.modify('mob_grinding_utils:saw_upgrade_beheading', item => {
        item.maxStackSize = 1
        item.fireResistant = true
    })
})