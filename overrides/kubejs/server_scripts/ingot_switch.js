// priority: 0

var output_replace
const ato_ores = [
    "aluminum",
    "iridium",
    "lead",
    "osmium",
    "nickel",
    "platinum",
    "silver",
    "tin",
    "uranium",
    "zinc",
    "bronze",
    "constantan",
    "electrum",
    "enderium",
    "invar",
    "lumium",
    "signalum",
    "steel",
    "brass"
]


ServerEvents.recipes(event => {

    // Ersetzt alle eingaben von Thermal, Immersive und Mekanism durch ATO Ausgaben
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

    ato_ores.forEach((replace) => {
        output_replace(replace,"ingot")
    })
})