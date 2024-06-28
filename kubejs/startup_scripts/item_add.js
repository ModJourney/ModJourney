// priority: 0
console.info('Hello, World! (Loaded startup scripts)')

StartupEvents.registry('item', event => {
	event.create('rolle_nether_1').texture('item/rolle_nether_1').unstackable()
	event.create('quest_1').texture('item/quest_1').unstackable()
	event.create('quest_2').texture('item/quest_2').unstackable()
})