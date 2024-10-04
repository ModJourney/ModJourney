ServerEvents.recipes(event => {

    // Rezept für Everlasting Guilty Pool (Ultimate Crafting Table)
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "tier": 4,
        "pattern": [
            "GGGGG",
            "GGGGG",
            "GGCBG",
            "GGGGG",
            "GGGGG"
        ],
        "key": {
            "G": {
                "item": "thermal:gold_coin"
            },
            "C": {
                "item": "ars_nouveau:archmage_spell_book"
            },
            "B": {
                "item": "botania:elementium_ingot"
            }
        },
        "result": {
            "item": "botania:creative_pool"
        }
    }).id('mod_journey:creative/creative_pool');

    // Rezept Mana Tablet (Ultimate Crafting Table)
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "tier": 4,
        "pattern": [
            "GGGGG",
            "GGGGG",
            "GGCBG",
            "GGGGG",
            "GGGGG"
        ],
        "key": {
            "G": {
                "item": "thermal:gold_coin"
            },
            "C": {
                "item": "ars_nouveau:archmage_spell_book"
            },
            "B": {
                "item": "botania:terrasteel_ingot"
            }
        },
        "result": {
            "item": "botania:mana_tablet",
            "nbt": {
                "mana": 500000,
                "creative": 1
            }
        }
    }).id('mod_journey:creative/mana_tablet');

    // Rezept für Augmenting Table (Ultimate Crafting Table)
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "tier": 4,
        "pattern": [
            "GGGGG",
            "GGGGG",
            "GGCBG",
            "GGGGG",
            "GGGGG"
        ],
        "key": {
            "G": {
                "item": "thermal:gold_coin"
            },
            "C": {
                "item": "ars_nouveau:archmage_spell_book"
            },
            "B": {
                "item": "apotheosis:endshelf"
            }
        },
        "result": {
            "item": "apotheosis:augmenting_table"
        }
    }).id('mod_journey:creative/augmenting_table');

    // Rezept für Ars Nouveau Creative Source Jar (Ultimate Crafting Table)
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "tier": 4,
        "pattern": [
            "GGGGG",
            "GGGGG",
            "GGCBG",
            "GGGGG",
            "GGGGG"
        ],
        "key": {
            "G": {
                "item": "thermal:gold_coin"
            },
            "C": {
                "item": "ars_nouveau:archmage_spell_book"
            },
            "B": {
                "item": "ars_nouveau:arcane_pedestal"
            }
        },
        "result": {
            "item": "ars_nouveau:creative_source_jar"
        }
    }).id('mod_journey:creative/creative_source_jar');




});