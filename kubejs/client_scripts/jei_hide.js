// priority: 5

//https://kubejs.com/wiki/addons/built-in/jei

JEIEvents.removeCategories(event => {
    console.log(event.categoryIds) //log a list of all category ids to logs/kubejs/client.txt
    
    event.remove('twilightforest:uncrafting')
  })