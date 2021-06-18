const figlet = require('figlet')
const chalk = require('chalk')
const inquirer = require('inquirer')

function getTitle(){
    return chalk.green(
        figlet.textSync(
            'Weather App',{
                horizontalLayout: 'full',
                font: 'Nancyj-Underlined'
            }
        )
    )
}

function getTable(model){
    const {locations} = model
    const {temps} = model
    const {maxs} = model
    const {mins} = model
    const table = []
    if(model.locations != undefined){
        for(i=0;i<locations.length;i++){
            table.push({"name": locations[i],"temp": temps[i],"max": maxs[i], "min": mins[i]})
        }
    }
    return table
}

function inputForm(model){
    const{location} = model
    const message = 'Location? '
    return inquirer.prompt([
        {
            name: 'location',
            type: 'input',
            message: message,
            default: location,
        }
    ])
}

function listForm1(model){
    const {selection} = model
    const message = 'Select action: '
    const choices = ['Add City']
    return inquirer.prompt([
        {
            name: 'action',
            type: 'list',
            message: message,
            default: selection,
            choices: choices
        }
    ])
}

function listForm2(model){
    const {selection} = model
    const message = 'Select action: '
    const choices = ['Add City','Update City','Delete City']
    return inquirer.prompt([
        {
            name: 'action',
            type: 'list',
            message: message,
            default: selection,
            choices: choices
        }
    ])
}

function listFormCity(model){
    const cities = []
    for(i=0;i<model.locations.length;i++){
        cities.push(model.locations[i])
    }
    const {selection} = model
    const choices = cities
    const message = "Delete City: "
    return inquirer.prompt([
        {
            name: 'delete',
            type: 'list',
            message: message,
            default: selection,
            choices: choices
        }
    ])

}

function view(model){
    return {
        title: getTitle(),
        table: getTable(model)
    }
}

module.exports = {
    view,
    inputForm,
    listForm1,
    listForm2,
    listFormCity
} 