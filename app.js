const yargs = require('yargs');
yargs.version('1.0');

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
        console.log(`Note title: ${argv.title}`);
        console.log(`Note body: ${argv.body}`);
    }
});

// Read 
yargs.command({
    command: 'read',
    describe: 'read a note',
    handler: function() {
        console.log('Reading note');
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
    command: 'remove',
    describe: 'remove a note',
    handler: function() {
        console.log('Removed note');
    }
});

yargs.parse();