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
    const {name} = model
    const {temp} = model
    const {max} = model
    const {min} = model
    return[
        {
            'name': name,
            'temp': temp,
            'max': max,
            'min': min,
        }
    ]
}

function inputForm(model){
    const{input} = model
    const message = 'Location? '
    return inquirer.prompt([
        {
            name: 'location',
            type: 'input',
            message: message,
            default: input,
        }
    ])
}
function listForm(model){
    const {input} = model
    const message = 'Select action: '
    const choices1 = ['Add City']
    const choices2 = ['Add City','Update City','Delete City']
    return inquirer.prompt([
        {
            name: 'action',
            type: 'list',
            message: message,
            default: input,
            choices: choices1
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
    listForm
} 