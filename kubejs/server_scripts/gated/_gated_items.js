//priority 5
// Höhere Priority wird zuerst gelesen.

/*
Hier werden die Stages Items definiert!
*/
/** Die Items schalten die nächst höhere Stage frei! */
const stages = {
    stage1 : {
        core: 'immersiveengineering:circuit_board',
        second:  '',
        endgame: '',
        magic: ''
    },
    stage2 : {
        core: 'ad_astra:glacio_stone',
        second: '',
        endgame: '',
        magic: ''
    },
    stage3 : {
        core: 'powah:crystal_nitro',
        second: '',
        endgame: '',
        magic: ''
    }
}

/* Zugriff auf das Objekt mittels "stages.stage1.core" order stages.stage3.magic*/