ServerEvents.recipes(event => {
    // Replace center item in bottom of recipe with stage item
    replacer.replaceInputByPosition(
        {id: 'sophisticatedbackpacks:stack_upgrade_tier_2'},
        1, 2, {'item': stages.stage1.core}
    )

    replacer.replaceInputByPosition(
        {id: 'sophisticatedbackpacks:stack_upgrade_tier_3'},
        1, 2, {'item': stages.stage2.core}
    )

    replacer.replaceInputByPosition(
        {id: 'sophisticatedbackpacks:stack_upgrade_tier_4'},
        1, 2, {'item': stages.stage3.core}
    )

})
