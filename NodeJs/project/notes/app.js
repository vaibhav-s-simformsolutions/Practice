const yargs = require('yargs')
const notes = require('./notes');

yargs.command({
    command:'add',
    describe:'Adding a note',
    builder : {
        title:{
            describe:'Note title',
            demandOption : true,
            type : 'string',
        },
        body:{
            describe:'Note Body',
            demandOption : true,
            type : 'string',
        }
    },
    handler(argv){
        notes.addnotes(argv.title,argv.body);
        console.log('Title : ' + argv.title);
        console.log('Body : ' + argv.body);
    }
})

yargs.command({
    command:'remove',
    describe:'remove a note',
    builder : {
        title:{
            describe:'Note title',
            demandOption : true,
            type : 'string',
        },
    },
    handler(argv){
        notes.removenote(argv.title);
    }
})
yargs.command({
    command:'list',
    describe:'List of Notes',
    handler(){
        notes.listofnotes();
    }
})
yargs.parse()