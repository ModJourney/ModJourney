ServerEvents.recipes(event => {

    //enfernt alle itemfilter rezepte
    let itemfilters = [
        'itemfilters:always_true',
        'itemfilters:always_false',
        'itemfilters:or',
        'itemfilters:and',
        'itemfilters:not',
        'itemfilters:xor',
        'itemfilters:tag',
        'itemfilters:mod',
        'itemfilters:id_regex',
        'itemfilters:damage',
        'itemfilters:block',
        'itemfilters:max_count',
        'itemfilters:strong_nbt',
        'itemfilters:weak_nbt',
        'itemfilters:custom',
       ]
    itemfilters.forEach(element => {
        event.remove({ output: element});
    });
})
