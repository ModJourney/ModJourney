    // priority: 0

const forge_ores_2 = [
  "aluminum",
  "iridium",
  "lead",
  "nickel",
  "osmium",
  "peridot",
  "platinum",
  "ruby",
  "sapphire",
  "silver",
  "tin",
  "uranium",
  "zinc"
]
 
const forge_ores_6 = [ "mekanism:fluorite_gem", "minecraft:quartz" ]
const forge_ores_12 = [ "lapis", "redstone" ]

ServerEvents.recipes(event => {
    //definieren von Funktion: Anreicherungskammer, //  Funktion(ausgabe, anzahl_ausgabe, eingabe(TAG), anzahl_eingabe)
    let mekka_enriching = (output, val_output, input, val_input) => {
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
    //definieren der Funktion: Thermal Pulverisierer // Funktion(Ausgabe, Eingabe(TAG))
    let thermal_pulverizing = (output, input) => {
      event.custom({
        "type": "thermal:pulverizer",
        "ingredient": {
          "tag": "forge:ingots/" + input
        },
        "result": [{
            "item": output,
            "count": 1
          }
        ],
        "energy_mod": 0.5
      });

      event.custom({
        "type": "thermal:pulverizer",
        "ingredient": {
          "tag": "forge:ores/" + input
        },
        "result": [{
            "item": output,
            "chance": 6.5
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
        "result": [
          {
            "item": output,
            "count": 1
          }
        ],
        "energy_mod": 0.5
      });
    }

    forge_ores_2.forEach(element => {
      event.remove({output: "#forge:dusts/" + element, mod: "mekanism"})
      mekka_enriching("alltheores:" + element + "_dust", 2, "forge:ores/" + element, 1)
      mekka_enriching("alltheores:" + element + "_dust", 12, "forge:storage_blocks/raw_" + element, 1)
      mekka_enriching("alltheores:" + element + "_dust", 4, "forge:raw_materials/" + element, 3)
      thermal_pulverizing("alltheores:" + element + "_dust", element)
      //industrial legierungsofen und pulverisierer fehlen
    });
    
//verwandeln in DUST
    //anreicherungskammer:
       //Dreckiger staub 1:1 abhänging siehe tags_add
       // Erz 1:2   FERTIG
       // raw block 1:12 Fertig
       // raw 3:4 FERTIG

    //Zerkleinerer:
       //ingot 1:1

//Verwandeln in Ingot
    //crafting:
       //Nugget 9:1
       //Block 1:9
  
    //Ofen
       //Erz 1:1
       //Raw 1/1
       //Dust 1:1
      
  //Legierungen mit einfügen
    //pulverisierer
    //induktionsschmelze


})
