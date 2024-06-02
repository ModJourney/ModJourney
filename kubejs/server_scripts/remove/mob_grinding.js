//priority 0

ServerEvents.recipes(event => {

    let mob_grinding = [
        'mob_grinding_utils:nutritious_chicken_feed', 
        'mob_grinding_utils:gm_chicken_feed_cursed'
    ]

    mob_grinding.forEach(element => {
        event.remove({
            output: element
        }) 
    });

})