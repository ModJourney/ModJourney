ItemEvents.tooltip(event => {

    //Ändert das Tooltip von 10 auf 3 beim Mob Masher Upgrade Looting
    event.addAdvanced(['mob_grinding_utils:saw_upgrade_looting'], (item, advanced, text) => {
        text.set(1, [
            Text.of('Looting: +1. Max of 3.').yellow()
        ])
    })

    //Ändert das Tooltip von 10 auf 1 beim Mob Masher Upgrade Beheading
    event.addAdvanced(['mob_grinding_utils:saw_upgrade_beheading'], (item, advanced, text) => {
        text.set(1, [
            Text.of('Beheading: +1. Max of 1.').yellow()
        ])
    })

})