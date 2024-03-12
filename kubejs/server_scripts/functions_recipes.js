//priority 90

//youll find the JSdocs and Funtions in this doc. In JS DOCs title in comment, you can search the original-code [ctrl+F])

    //"Fluid Laser Drill" 

        /**
         * @example tierfarm("cofh_core:honey", 20, "minecraft:bee", 2)
         * @param Fluessigkeit {string} - Die  die angegeben werden muss zB. "minecraft:water"
         * @param wieviel {int}  - wie viel ausgabe soll erzeugt werden in mb
         * @param tier {string} - welches entity soll gefarmt werden. z.b. "minecraft:bee"
         * @param linsentyp {int} - welcher lisnentyp wird ausgewählt 0-15
        */
        var tierfarm
    
    //replace Output from mekanism, immersive and thermal to alltheores

        /**
         * Ändert die gesamte Rezeptausgabe von Materialien aus mekanism und thermal zu alltheores
         * @example output_replace("bronze","ingot")
         * @param rohmaterial {string} - Gebe hier die Art des Metalls an.
         * @param werkstoff {string} - Was für ein Werkstück. Gear, Rod, Ingot etc.
        */
        var output_replace
    
    //The thermal pulverizer is defiend with free in- and output
         
        /**
         * Hier könnnen Rezepte für den crusher definiert werden.
         * @example "alltheores:iron_dust", 1,"forge:plates/iron", 1 
         * //Die Ausgabe ist ein spezifisches Item, die Eingabe erfolgt durch Tags!
         * @param output {string} - Item ID:definieren des Outputs der Maschine
         * @param count_out {Int} - Angabe wie viel ausgegeben werden soll
         * @param input {string} -  Tag ID: definieren der Eingabe 
         * @param count_inp {Int} - Angabe wie viele Items gebraucht werden
        */
        var crusher_complete_free

    //The thermal pulverizer as scrap Produce. This Function is build to Recycle.
        /**
         * Hier können Rezepte zum Recyclen angelegt werden. 
         * @example thermal_pulverizing("alltheores:iron_dust", "iron")
         * // Die Ausgabe ist ein fixer Wert, Die Eingabe erfolgt durch das "Erz"
         * // Es werden Rezepte erzeugt für: Ores,Plates,Ingots - CommingSoon: Gears, Rods 
         * @param output {string} - Es wird eine Item-ID erwartet
         * @param input {string} - Es wird ein rohmaterial erwartet (Tags werden generiert)
        */
        var thermal_pulverizing

    //The mekanism enriching_chamber, with free In- and Output
        
        /** 
         * Hier können Rezepte für die Anreicherungskammer definiert werden.
         * @example mekka_enriching("alltheores:iron_dust", 12, "forge:storage_blocks/raw_iron", 1)
         * //Die Ausgabe ist ein spezifisches Item, die Eingabe erfolgt durch Tags!
         * @param output {string} - Item ID:definieren des Outputs der Maschine
         * @param val_output {Int} - Angabe wie viel ausgegeben werden soll
         * @param input {string} -  Tag ID: definieren der Eingabe 
         * @param val_input {Int} - Angabe wie viele Items gebraucht werden
        */
        var mekka_enriching

    //The mekanism crusher, with free In- and Output

        /**
         * Hier können Rezepte für den Mekanism Zerkleinerer angelegt werden
         * @example mekka_crushing("alltheores:iron_dust", 1, "forge:ingots/iron", 1)
         * //Die Ausgabe ist ein spezifisches Item, die Eingabe erfolgt durch Tags!
         * @param output {string} - Item ID:definieren des Outputs der Maschine
         * @param val_output {Int} - Angabe wie viel ausgegeben werden soll
         * @param input {string} -  Tag ID: definieren der Eingabe 
         * @param val_input {Int} - Angabe wie viele Items gebraucht werden
        */
        var mekka_crushing

ServerEvents.recipes(event => {

    // #######################################################################################

    //Custom Recipe Functions

        //Fluid Laser Drill
        tierfarm = (Fluessigkeit, wieviel, tier, linsentyp) => {
            event.custom({
                "type": "industrialforegoing:laser_drill_fluid",
                "catalyst": {
                "item": "industrialforegoing:laser_lens" + linsentyp
                },
                "entity": tier,
                "output": "{Amount:" + wieviel + ",FluidName:\"" + Fluessigkeit + "\"}",
                "pointer": 0,
                "rarity": [{
                    "blacklist": {},
                    "depth_max": 256,
                    "depth_min": -64,
                    "weight": 8,
                    "whitelist": {}
                }]
            })
        }

    // #######################################################################################

    //Replace Functions

        //replace Output from mekanism, immersive and thermal to alltheores
        output_replace = (rohmaterial, werkstoff) => {
            let mods_name_1 = ["mekanism", "immersiveengineering"]
            let mods_name_2 = ["thermal"]
            mods_name_1.forEach((element) => {
                event.replaceOutput({},element + ':' +  werkstoff + '_' +  rohmaterial, 'alltheores:' + werkstoff + '_' + rohmaterial)
            })
            mods_name_2.forEach((element) => {
                event.replaceOutput({},element + ':' + rohmaterial + '_' + werkstoff, 'alltheores:' + werkstoff + '_' + rohmaterial)
            })
        } 

    // #######################################################################################

    //Thermal Functions

        //The thermal pulverizer is defiend with free in- and output
        crusher_complete_free = (output, count_out, input, count_inp) => {
            event.custom({
                "type": "thermal:pulverizer",
                "amount": count_inp,
                "ingredient": {
                    "tag": input
                },
                "result": [{
                    "item": output,
                    "count": count_out
                }],
                "energy_mod": 1.0
            })
        }

        //The thermal pulverizer as scrap Produce. This Function is build to Recycle.
        thermal_pulverizing = (output, input) => {
            event.custom({
                "type": "thermal:pulverizer",
                "ingredient": {
                    "tag": "forge:ingots/" + input
                },
                "result": [{
                    "item": output,
                    "count": 1
                }],
                "energy_mod": 0.5
            });
            event.custom({
                "type": "thermal:pulverizer",
                "ingredient": {
                    "tag": "forge:ores/" + input
                },
                "result": [{
                    "item": output,
                    "chance": 1.5
                    }, {
                        "item": "minecraft:gravel",
                        "chance": 0.2
                    }
                ],
                "experience": 0.2
            });
            event.custom({
                "type": "thermal:pulverizer",
                "ingredient": {
                    "tag": "forge:plates/" + input
                },
                "result": [{
                    "item": output,
                    "count": 1
                }],
                "energy_mod": 0.5
            });
        }


    // #######################################################################################
       
    //Mekanism Functions
    
        //The mekanism enriching_chamber, with free In- and Output
        mekka_enriching = (output, val_output, input, val_input) => {
            event.custom({
                "type": "mekanism:enriching",
                "input": {
                    "amount": val_input,
                    "ingredient": {
                        "tag": input
                    }
                },
                "output": {
                    "count": val_output,
                    "item": output
                }
            })
        }

        //The mekanism crusher, with free In- and Output
        mekka_crushing = (output, val_output, input, val_input) => {
            event.custom({
                "type": "mekanism:crushing",
                "input": {
                    "amount": val_input,
                    "ingredient": {
                    "tag": input
                    }
                },
                "output": {
                    "count": val_output,
                    "item": output
                }
            })
        }


})