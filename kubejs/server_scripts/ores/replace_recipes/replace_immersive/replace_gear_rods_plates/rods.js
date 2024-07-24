//priority 50

ServerEvents.recipes(event => {

    let rods = [
    'iron',
    'steel',
    'aluminum'
    ]

    rods.forEach(rod => {

        event.replaceOutput({ output: "immersiveengineering:stick_" + rod }, "immersiveengineering:stick_" + rod, "alltheores:" + rod + "_rod" );

    });
})
