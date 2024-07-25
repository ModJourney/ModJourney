//priority 10

ServerEvents.tags('item', event => {


    let meka_ores = [
        'osmium',
        'tin',
        'lead',
        'uranium'
    ]

    let meka_alloys = [
        'bronze',
        'steel'
    ]

    let meka_vanilla = [
        'gold',
        'iron',
        'copper',
        'diamond'
    ]

    meka_ores.concat(meka_alloys).forEach(name => {
        add_removeTag( event, 'mekanism:nugget_' + name )
        add_removeTag( event, 'mekanism:block_' + name )
        add_removeTag( event, 'mekanism:dust_' + name )
        add_removeTag( event, 'mekanism:ingot_' + name )
    });

    meka_ores.forEach(name => {
        add_removeTag( event, 'mekanism:block_raw_' + name )
        add_removeTag( event, 'mekanism:deepslate_' + name + '_ore')
        add_removeTag( event, 'mekanism:' + name + '_ore')
    });

    meka_vanilla.forEach(name => {
        add_removeTag(event, 'mekanism:dust_' + name )
    });

})