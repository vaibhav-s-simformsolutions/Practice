const fs = require('fs');
const chalk = require('chalk');
const { compileFunction } = require('vm');

const addnotes = (title,body) => {
    const data = loaddata();
    
    const duplicate = data.filter((note)=>{
        return note.title === title;
    })

    if(duplicate.length == 0){
        data.push({
            title : title,
            body : body,
        })
        savedata(data);
        console.log(chalk.green("Note Successfully Added !!!"));
    }else{
        console.log(chalk.red("Note title was taken !!!"));
    }
    
}
const savedata = (data) => {
    const jsondata = JSON.stringify(data);
    fs.writeFileSync('notes.json',jsondata);
}
const loaddata = () => {
    try {
        const data = fs.readFileSync('notes.json').toString();
        return JSON.parse(data);
    }
    catch(e){
        return [];
    }
}

const removenote = (title) => {
    const data = loaddata();
    const modifieddata = data.filter((note)=>{
        return note.title != title;
    })
    if(data.length == modifieddata.length){
        console.log(chalk.red("Data Not Founded !!!"));
    }
    else{
        console.log(chalk.green("Data Deleted !!!"));
        savedata(modifieddata);
    }
}

const listofnotes = () => {
    const data = loaddata();
    console.log(chalk.bold("List Of Notes : "));
    data.forEach(element => {
        console.log(element.title);
    });
}

module.exports = {
    addnotes : addnotes,
    removenote : removenote,
    listofnotes : listofnotes,
}