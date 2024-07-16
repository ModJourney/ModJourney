//priority 0

ServerEvents.recipes(event => {
    console.log('Ändern der Gated Enderchest Items')

    // Enderchest
    event.replaceInput(
        { id: 'enderchests:ender_pouch' },
        'minecraft:leather',
        stages.stage1.core
    )

    // EnderTank
    event.replaceInput(
        { id: 'endertanks:tank' },
        '#forge:rods/blaze',
        stages.stage1.core
    )

    // EnderBucket
    event.replaceInput(
        { id: 'endertanks:bucket' },
        'minecraft:blaze_powder',
        stages.stage1.core
    )
})
