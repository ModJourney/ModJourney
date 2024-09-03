//priority 50


let change_rods = (event) => {

    //Löschen von Rezepten
        ato.alloy.concat(ato.metall,ato.vanilla,ato.gems).forEach(metal => {
            event.remove({output: `#forge:rods/${metal}`})
        });

    //Hinzufügen von den Stangen/Stab Rezepten
    ato.alloy.concat(ato.metall,ato.vanilla).forEach(metal => {
        thermal_press(event, `forge:ingots/${metal}`,1,`alltheores:${metal}_rod`,2,ato.mold.rod,`thermal/rod/${metal}`)
        immersive_press(event, `forge:ingots/${metal}`,1,`alltheores:${metal}_rod`,2,2400,ato.mold.rod,`immersive/rod/${metal}`)
        plate_shapeless(event, `forge:ingots/${metal}`,3,`alltheores:${metal}_rod`,1,`shapeless/rod/${metal}`)
    });

    //Hinzufügen für gem Rezepte
    ato.gems.forEach(metal => {
        thermal_press(event, `forge:gems/${metal}`,1,`alltheores:${metal}_rod`,2,ato.mold.rod,`thermal/rod/${metal}`)
        immersive_press(event, `forge:gems/${metal}`,1,`alltheores:${metal}_rod`,2,2400,ato.mold.rod,`immersive/rod/${metal}`)
        plate_shapeless(event, `forge:gems/${metal}`,3,`alltheores:${metal}_rod`,1,`shapeless/rod/${metal}`)
    });

}