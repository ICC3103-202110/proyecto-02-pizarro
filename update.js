function update(location, newlocations, newtemp, newmax, newmin, model){
    newlocations.push(location.location)
    newtemp.push(23)
    newmax.push(26)
    newmin.push(15)
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