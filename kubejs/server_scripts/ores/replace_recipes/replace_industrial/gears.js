//priority 50


ServerEvents.recipes(event => {

    let gears = [
        "gold",
        "iron",
        "diamond"
    ]
    gears.forEach(gear => {
        event.remove({output: "industrialforegoing:" + gear + "_gear"})
    });

})