const {getTitle} = require('./view')

function app(state,update,view){
    console.clear
    console.log(getTitle())
}

module.exports = {
    app
}