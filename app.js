// const argv = require('yargs').argv;

const argv = require('./config/yargs.js').argv;
const colors = require('colors');
const toDo = require('./toDo/toDo.js');

let command = argv._[0]
let description = argv.description
let complete = argv.complete

switch(command){
    
    case 'create':
        let task = toDo.create(description);
        console.log(`Ỳou just create a task ${task}`)
        break;
    case 'list':
        let list = toDo.getList();
        console.table(list)
//         for(let task of list){
//             console.log(colors.green('======To Do======'))
//             console.log(task.description)
//             console.log('Status: ', task.complete)
//             console.log(colors.rainbow('================='))
//         }        
        break;
    case 'update':
        let update = toDo.update(description,complete)
        console.log(update)
        break;
    case 'remove':
        let remove = toDo.remove(description)
        console.log(remove)
        break;
    default:
        console.log('I dont get you');
            
}
