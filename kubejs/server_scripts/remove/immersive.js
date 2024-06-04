ServerEvents.recipes(event => {
    //entfernt alle Gartenglocken Rezepte.
    event.remove({ type: 'immersiveengineering:cloche' })

    //entfernt das Gartenglockenrezept
    event.remove({ output: 'immersiveengineering:cloche' })

})