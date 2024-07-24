//priority 50

ServerEvents.recipes(event => {

    let plates = [
        'immersiveengineering:plate_steel',
        'immersiveengineering:plate_electrum',
        'immersiveengineering:plate_constantan',
        'immersiveengineering:plate_uranium',
        'immersiveengineering:plate_nickel',
        'immersiveengineering:plate_silver',
        'immersiveengineering:plate_lead',
        'immersiveengineering:plate_aluminum',
        'immersiveengineering:plate_copper',
        'immersiveengineering:plate_gold',
        'immersiveengineering:plate_iron'
    ]
    plates.forEach(plate => {

        event.replaceOutput({ output: plate }, plate, "alltheores:" + plate.split('_')[1] + "_plate" );

    });
})