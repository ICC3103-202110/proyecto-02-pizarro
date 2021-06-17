function update(selection, location, newlocations, newtemp, newmax, newmin, model){
    if (selection.action === "Add City"){
        newlocations.push(location.location)
        newtemp.push(23)
        newmax.push(26)
        newmin.push(15)
    }

    if (selection.action === "Delete City"){
        console.log(location.delete)
        let index = newlocations.indexOf(location.delete)
        newtemp.splice(index, 1)
        newmax.splice(index, 1)
        newmin.splice(index, 1)
        newlocations.splice(index, 1)
        
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