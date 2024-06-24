// priority: 100

// In diesem Skript werden alle Ausagen von Mekanism Enriching, Crushing und Minecraft Crafting, Blasting auf alltheores umgestellt. 
// Dies konsolidiert folgende Werksmaterialien: Raw_Ore,Storage_blocks, Raw_storage_Blocks, Dust, Nugget, Ingot

//WICHTIG 
// Zum aktuellen Stand fehlt noch Thermal: Induktionsschmelze, Packer, RedstoneOfen
ServerEvents.recipes(event => {


    var crushing_meka = (werkstoff) => {

        atos.forEach(element => {
            event.forEachRecipe({type: 'mekanism:crushing', output: 'mekanism:' + werkstoff + '_' + element }, r => {
                let json = r.json;
                let output = r.json.get("output")
                output.add("item", 'alltheores:' + element + '_' + werkstoff)
        
                event.custom(r.json).id(r.getId())
            })
        });
    };

    var enriching_meka = (werkstoff) => {

        atos.forEach(element => {
            event.forEachRecipe({type: 'mekanism:enriching', output: 'mekanism:' + werkstoff + '_' + element }, r => {
                let json = r.json;
                let output = r.json.get("output")
                output.add("item", 'alltheores:' + element + '_' + werkstoff)
        
                event.custom(r.json).id(r.getId())
            })
        });
    };

    var mc_smelting_and_blasting = (werkstoff_input, werkstoff_output) => {
        atos.forEach(element => {
            event.forEachRecipe([{ type: 'minecraft:smelting', input: '#forge:' + werkstoff_input + '/' + element, not: {group: 'alltheores'}},{ type: 'minecraft:blasting', input: '#forge:' + werkstoff_input + '/' + element, not: {group: 'alltheores'}}], r => {
                let json = r.json;
                let output = r.json
                output.add("result", 'alltheores:' + element + '_' + werkstoff_output.slice(0, -1))
                event.custom(r.json).id(r.getId())
            }) 
        });
    }

    var mc_craftingtable = (werkstoff_output,X,Y) => {
        atos.forEach(element => {
            event.forEachRecipe([{type: 'minecraft:crafting_shaped', output: '#forge:' + werkstoff_output + '/' + element}, {type: 'minecraft:crafting_shapeless', output: '#forge:' + werkstoff_output + '/' + element}], r => {
                let json = r.json;
                let output = r.json.get("result")
                output.add("item", 'alltheores:' + element + '_' + werkstoff_output.slice(X, Y))
                event.custom(r.json).id(r.getId())
            }) 
        });
    }

    var mc_craftingtable2 = (werkstoff_output,X,Y) => {
        atos.forEach(element => {
            event.forEachRecipe([{type: 'minecraft:crafting_shaped', output: '#forge:' + werkstoff_output + '/' + element}, {type: 'minecraft:crafting_shapeless', output: '#forge:' + werkstoff_output + '/' + element}], r => {
                let json = r.json;
                let output = r.json.get("result")
                output.add("item", 'alltheores:' + werkstoff_output.slice(X, Y) + '_' + element )
                event.custom(r.json).id(r.getId())
            }) 
        });
    }

    var mc_craftingtable3 = (werkstoff_output,X,Y) => {
        atos.forEach(element => {
            event.forEachRecipe([{type: 'minecraft:crafting_shaped', output: '#forge:' + werkstoff_output + element}, {type: 'minecraft:crafting_shapeless', output: '#forge:' + werkstoff_output + element}], r => {
                let json = r.json;
                let output = r.json.get("result")
                output.add("item", 'alltheores:' + werkstoff_output.slice(X, Y) + '_' + element + '_block')
                event.custom(r.json).id(r.getId())
            }) 
        });
    }


    // Initalisierung der Funktionen mit Parametern. Zum deaktivieren einfach auskommentieren und /reload drücken.

    enriching_meka('dust');                                 //Anreicherungskammer verarbeitet zu Dusts
    crushing_meka('dust');                                  //Mekanism Brecherfabrik verarbeitet zu Dusts
    mc_smelting_and_blasting('ores', 'ingots')              //(Schmelz)ofen verarbeitet: Roh-Erz zu Ingots
    mc_smelting_and_blasting('raw_materials', 'ingots')     //(Schmelz)ofen verarbeitet: Steinerz zu Ingots
    mc_smelting_and_blasting('dusts', 'ingots')             //(Schmelz)ofen verarbeitet: Dusts zu Ingots
    mc_craftingtable('ingots',0,-1)                         //Crafting zu Ingots im Craftingfeld
    mc_craftingtable('nuggets',0,-1)                        //Crafting zu Nuggets im Craftingfeld
    mc_craftingtable2('raw_materials',0,-10)                //Unsematische IDs desswegen die 2
    mc_craftingtable3('storage_blocks/raw_',15,-1)          //Unsematische IDs desswegen die 3     
})


    /*
        Hier ist die Basisfunktion. Zur Erklärung:
        Es wird direkt an den Eventhandler angeknüpft und die Rezepte vom Typ crushing mit der Ausgabe Bleistaub werden z.B. an die variable "r" übergeben.
        Dieses Rezept was nun als rohe JSON vorliegt, kann nun weiterverarbeitet werden. so wird der output in dem Beispiel überschrieben. Zuweil wird
        ein neues custom Event angelegt und die json wird wieder reingeladen. Mittels der id wird das ursprungsrezept mit r.getId wieder zugeteilt. 
        Vor diese Funktion ist ein array mit einer schleife gekoppelt, welche alle Erze enthält, welche in ATO vorkommen. 
        So kann man gewährleisten, dass wenn man dieses erz mit übergibt und als Filter angibt, nur Rezepte zu erstellen, welche auch im Sucharray vorkommen!

    
            event.forEachRecipe({type: 'mekanism:crushing', output: 'mekanism:dust_lead'}, r => {
                let json = r.json;
                let output = r.json.get("output")
                output.add("item", 'alltheores:lead_dust')

                event.custom(r.json).id(r.getId())
            })
    */