const fs = require('fs') ;

let toDoList = [];


const saveDB = () => {
    
    let data = JSON.stringify(toDoList);
    fs.writeFile('./dataBase/data.json',data, (err) => {
        if(err) throw new Error('no se pudo grabar', err);
        
    });
    
    
};

const uploadDB = () => {
    
    try {
        
        toDoList = require('../dataBase/data.json');
        
    } 
    catch (err) {
        
        toDoList = [];   
        
    };
    
    return toDoList
 
};


const create = (description) => {
    
    uploadDB();
   
    let toDo = {
        
        description : description,
        complete: false
        
    };
    
    toDoList.push(toDo);
    
    saveDB();
    
    return toDo;
       
};
const getList = () => {
    return uploadDB()
}

const update = (description, complete = true) => {
    uploadDB()
    let list = toDoList
    let index = list.findIndex(elemnt => elemnt.description == description)
//     let index = list.findIndex((elemnt) => {
//         
//         if(elemnt.description == description){
//             return elemnt
//         }
    if(index >= 0){
        list[index].complete = complete 
        saveDB()
        return list
    } else { return 'Esta actividad no esta en  tu listado'}
    
    
    
}

const remove = (description) => {
    uploadDB()
//     let list = toDoList
//     let index = list.findIndex(elemnt => elemnt.description === description);
//     
//     if(index >= 0){
//         list.splice(index,1)
//         saveDB()
//         return list
//     } else { return 'Esta actividad no esta en  tu listado'}
    let list = toDoList.filter(elemnt => elemnt.description !== description)
    toDoList = list
    saveDB()
    return list
}

module.exports = {
    create,
    getList,
    update,
    remove
    
};
