// priority: 0

ServerEvents.recipes(event => {

    ato_ores.forEach((replace) => {
        output_replace(replace,"ingot")
        output_replace(replace,"gear")
        output_replace(replace,"nugget")
        output_replace(replace,"block")
        output_replace(replace,"plate")
        output_replace(replace,"dust")
    })
})