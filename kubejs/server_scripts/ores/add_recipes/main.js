//priority 50

/*
Alle Gear Output Rezepte löschen.
Alle Plate Output Rezepte löschen
Alle Rod Output Rezepte löschen

Einfügen aller oben genannten Rezepte in:
Shapeless
Metal Press (thermal)
press (immersive)
copper nuggets
*/

ServerEvents.recipes(event => {

    change_gears(event)
    change_plates(event)
    change_rods(event)
})