// priority: 0

ServerEvents.recipes(event => {

    let entfernen = [
        'megacells:mega_interface',                     //ersatz durch extended AE
        'megacells:mega_pattern_provider',              //ersatz durch extended AE
        'megacells:cable_mega_pattern_provider',        //ersatz durch extended AE
        'megacells:cable_mega_interface',               //ersatz durch extended AE
        'megacells:radioactive_cell_component',         //radioaktivität zum wegwerfen?
        'megacells:radioactive_chemical_cell',          //radioaktivität zum wegwerfen?
        'expatternprovider:drive_upgrade',              //upgrade, block craftbar aber gatet
        'expatternprovider:pattern_provider_upgrade',   //upgrade, block craftbar aber gatet
        'expatternprovider:interface_upgrade',          //upgrade, block craftbar aber gatet
        'expatternprovider:io_bus_upgrade',             //upgrade, block craftbar aber gatet
        'expatternprovider:pattern_terminal_upgrade',   //upgrade, block craftbar aber gatet
        Item.of('expatternprovider:me_packing_tape', '{Damage:0}')  //Carry Mod gleiches Feature
    ]

    entfernen.forEach((element) => {
        event.remove({ 
            output: element
        })
    });
    
})