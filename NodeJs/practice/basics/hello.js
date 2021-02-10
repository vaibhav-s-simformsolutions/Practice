
//write or read from file
// const fs = require('fs')
// fs.writeFileSync('output.txt','Hi Vaibhav Here !!!')
// fs.appendFileSync('output.txt','appended data !!!')



//chalk library for terminal text formate
// const chalk = require('chalk');
// console.log(chalk.red('Hello world!') + " " + chalk.red.bgGreen.bold(' Vaibhav '));

//command line args
//console.log(process.argv)
//command
const yargs = require('yargs')
yargs.command({
    command:'add',
    describe:'Adding a note',
    builder : {
        title:{
            describe:'Note title',
            demandOption : true,
            type : 'string',
        }
    },
    handler:function(argv){
        console.log('Title : ' + argv.title);
    }
})

yargs.command({
    command:'remove',
    describe:'remove a note',
    handler:function(){
        console.log('Removing the note');
    }
})
yargs.command({
    command:'read',
    describe:'read a note',
    handler:function(){
        console.log('Reading the note');
    }
})
yargs.parse()
// console.log(yargs.argv)