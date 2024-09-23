//Erstelle Obkjekt mit den Koordinaten des Spielermarktes
const player_markt_corners = {
    out: {
        x: {
            min: -23,
            max: 39,
        },
        y: {
            min: -65,
            max: 355,
        },
        z: {
            min: 119,
            max: 201,
        }
    },
    inner: {
        x: {
            min: -6,
            max: 21,
        },
        y: {
            min: 108,
            max: 113,
        },
        z: {
            min: 138,
            max: 181,
        }
    }
}

PlayerEvents.tick(event => {

    //Anlegen eines Objektes mit den notwenidgen Daten vom Spieler.
    let player_observe = {
        thisLevel: event.player.getLevel().toString(),
        dimension: event.player.level.getDimension().toString(),
        hasTag: event.player.stages.has("in_shop"),
        whereIs: {
            x: event.player.x,
            y: event.player.y,
            z: event.player.z,
        }
    }

    //Überprügungen. Modulo 100 = ist der servertick durch 100 teilbar und ein Rest von Null ergibt sich
    //auslesen des Levels vom Server
    //ausgelesen, ob dimension overworld ist
    //ausgabe von boolischen werten. wenn alles true, dann var mod_jounrey_server_check === true
    let mod_journey_server_check = (
        event.server.tickCount % 100 === 0 &&
        event.player.getLevel().toString() === "ServerLevel[Neue Welt]" &&      //Hier den Namen des root Verzeichnisses eingeben. Level.dat muss übereinstimmen.
        event.player.level.getDimension().toString() === "minecraft:overworld"
    )

    //treffen alle Punkte überein, werden die Spieler Koordinaten überprüft und mit den äußeren Bereich des Marktes gegenübergestellt.
    if (mod_journey_server_check) {

        let check_outer_corner_x = player_observe.whereIs.x >= player_markt_corners.out.x.min && player_observe.whereIs.x <= player_markt_corners.out.x.max
        let check_outer_corner_z = player_observe.whereIs.z >= player_markt_corners.out.z.min && player_observe.whereIs.z <= player_markt_corners.out.z.max
        let check_outer_corner = check_outer_corner_x && check_outer_corner_z

        //Befindet sich ein Spieler in dem genannten Bereich, und hat den shop Tag nicht, wird dieser Tag dem Spieler gegeben. Andernfalls, befindet sich der Spieler nicht in den
        //Koordinaten und hat den Tag noch, wird ihm der Shop Tag removed. Es folgt eine Textausgabe in beiden Fällen für den Spieler.
        if (check_outer_corner) {
            if (!player_observe.hasTag) {
                event.player.stages.add("in_shop")
                event.player.tell("Du darfst nun im Markt bauen")
            }
        } else {
            if (player_observe.hasTag) {
                event.player.stages.remove("in_shop")
                event.player.tell("aktuell hast Du keine Berechtigung mehr um im Markt zu bauen.")
            }
        }
    }
})