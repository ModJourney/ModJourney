ServerEvents.recipes(event => {
    event.forEachRecipe([
        { id: 'mysticalagriculture:infusion_altar' },
        { id: 'mysticalagriculture:awakening_altar' }
    ], r => {
        let newInput = { 'item': stages.stage3.core };

        // Replace second line of recipe pattern
        r.json.get('pattern').set(1, " N ");

        // Add gated item for pattern 'N'
        r.json.get('key').add('N', newInput)
    })
})