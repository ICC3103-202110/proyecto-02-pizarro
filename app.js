const {getTitle} = require('./view')
const {inputForm, listForm1, listForm2} = require('./view')
const {printTable} = require('console-table-printer')
const newlocations = []
const newtemp = []
const newmax= []
const newmin= []

async function app(state,update,view){
    while(true){

        const {model, currentView} = state
        const {title, table} = currentView
        console.clear
        console.log(title)

        if (newlocations.length === 0){
            console.log("NO CITIES")
            const selection = await listForm1(model)
            const location = await inputForm(model)
            const updatedModel = update(location, newlocations, newtemp, newmax, newmin, model)
            state = {
                ...state,
                model: updatedModel,
                currentView : view(updatedModel)
            }
        }
        else{
            printTable(table)
            const selection = await listForm2(model)
            const location = await inputForm(model)
            const updatedModel = update(location, newlocations, newtemp, newmax, newmin, model)

            state = {
                ...state,
                model: updatedModel,
                currentView : view(updatedModel)
            }
        }
        
    }
}

module.exports = {
    app
}