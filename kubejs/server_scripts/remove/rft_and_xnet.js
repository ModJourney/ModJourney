ServerEvents.recipes(event => {

    let remove = [
        Item.of('rftoolsutility:advanced_charged_porter').ignoreNBT(),
        Item.of('rftoolsutility:charged_porter').ignoreNBT(),
        'rftoolsutility:matter_booster',
        'rftoolsutility:tank',
        'rftoolsutility:matter_beamer',
        'rftoolsutility:flight_module',
        'rftoolsutility:luck_module',
        'rftoolsutility:peaceful_module',
        'rftoolsutility:spawner',
        'rftoolsutility:destination_analyzer',
        'rftoolsutility:dialing_device',
        'rftoolsutility:matter_receiver',
        'rftoolsutility:matter_transmitter',
        'rftoolsutility:syringe'
    ]

    remove.forEach((element) => {
        event.remove({output: element})
    });

})
