const yargs = require('yargs');
const notes = require('./notes');

// Add 
yargs.command({
    command: 'add',
    describe: 'add a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        notes.add(argv.body, argv.title);
    }
});

// Read 
yargs.command({
    command: 'remove',
    describe: 'remove a note',
    builder: {
        title: {
            describe: 'note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        notes.remove(argv.title);
    }
});

// List 
yargs.command({
    command: 'list',
    describe: 'list all notes',
    handler: function() {
        console.log('Notes: ');
    }
});

// Remove 
yargs.command({
    command: 'read',
    describe: 'read a note',
    handler: function() {
        console.log('Note: ');
    }
});

yargs.parse();