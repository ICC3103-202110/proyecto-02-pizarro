const axios = require('axios')

function temp(api){
    let get = axios.get(api)
    .then(function(response){
        let temp = response.data.main.temp
        return temp
    })
    return get
}

function maxtemp(api){
    let get = axios.get(api)
    .then(function(response){
        let temp = response.data.main.temp_max
        return temp
    })
    return get
}

function mintemp(api){
    let get = axios.get(api)
    .then(function(response){
        let temp = response.data.main.temp_min
        return temp
    })
    return get
}

function randmax(){
    return Math.floor(Math.random()*(32-24)+24)
}

function randtemp(){
    return Math.floor(Math.random()*(24-18)+18)
}

function randmin(){
    return Math.floor(Math.random()*(18-8)+8)
}

async function update(selection, location, newlocations, newtemp, newmax, newmin, model){
    const url = "https://api.openweathermap.org/data/2.5/weather"
    const key = "35abcb564a17f2bcf53fd34c8394864d"
    const api  = `${url}?q=${location.location}&appid=${key}&units=metric`

    if (selection.action === "Add City"){
        newlocations.push(location.location)
        newtemp.push(await temp(api))
        newmax.push(await maxtemp(api))
        newmin.push(await mintemp(api))
        console.log(newtemp)
    }

    if (selection.action === "Delete City"){
        let index = newlocations.indexOf(location.delete)
        newtemp.splice(index, 1)
        newmax.splice(index, 1)
        newmin.splice(index, 1)
        newlocations.splice(index, 1)
        
    }

    if (selection.action === "Update City"){
        const api2  = `${url}?q=${location.delete}&appid=${key}&units=metric`
        let index = newlocations.indexOf(location.delete)
        newtemp.splice(index, 1, await temp(api2))
        newmax.splice(index, 1, await maxtemp(api2))
        newmin.splice(index, 1, await mintemp(api2))
    }
    
    return{
        ...model,
        locations: newlocations,
        temps: newtemp,
        maxs: newmax,
        mins: newmin
    }
}

module.exports = {
    update
}