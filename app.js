const {getTitle} = require('./view')
const {inputForm, listForm} = require('./view')
const {printTable} = require('console-table-printer')

async function app(state,update,view){
    const {model, currentView} = state
    const {title, table} = currentView
    console.clear
    console.log(title)
    console.log("NO CITIES")
    const selection = await listForm(model)
    const location = await inputForm(model)
    printTable(table)

}

module.exports = {
    app
}