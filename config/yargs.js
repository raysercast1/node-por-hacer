const opt1 = {
    description:{
            demand:true,
            alias:'d'
            
        } 
}

const opt2 = {
    description:{
            demand:true,
            alias:'d'
            
        },
     complete:{
            alias: 'c',
            default: true
            }       
    }

const argv = require("yargs")
    .command('create','create a task for a To Do list',opt1)
    .command('update','update a task from a To Do list created',opt2)
    .help()
    .argv; 

    
module.exports = {
    argv  
}; 
