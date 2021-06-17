function randmax(){
    return Math.floor(Math.random()*(32-24)+24)
}

function randtemp(){
    return Math.floor(Math.random()*(24-18)+18)
}

function randmin(){
    return Math.floor(Math.random()*(18-8)+8)
}

function update(selection, location, newlocations, newtemp, newmax, newmin, model){
    if (selection.action === "Add City"){
        newlocations.push(location.location)
        newtemp.push(randtemp())
        newmax.push(randmax())
        newmin.push(randmin())
    }

    if (selection.action === "Delete City"){
        let index = newlocations.indexOf(location.delete)
        newtemp.splice(index, 1)
        newmax.splice(index, 1)
        newmin.splice(index, 1)
        newlocations.splice(index, 1)
        
    }

    if (selection.action === "Update City"){
        let index = newlocations.indexOf(location.delete)
        newtemp.splice(index, 1, randtemp())
        newmax.splice(index, 1, randmax())
        newmin.splice(index, 1, randmin())
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