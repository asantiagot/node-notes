const fs = require('fs');
const chalk = require('chalk');

// Add note
function addNote(body, title) {
    const notes = loadNotes();

    for (let note of notes) {
        if (note.title === title) {
            console.log(`Note title ${title} already exists`);
            return;
        }
    }
    notes.push({
        title: title,
        body: body
    });
    writeFile('notes.json', notes);
    
}

// Remove note
function removeNote(title) {
    const notes = loadNotes();
    let count = 0;
    let titleExists = false;
    for (let note of notes) {
        if (note.title === title) {
            titleExists = true;
            notes.splice(count, 1);
            console.log(chalk.green(`Note ${title} removed`));
            break;
        }
        count++;
    }
    writeFile('notes.json', notes);
    if (!titleExists) {
        console.log(chalk.red(`Note ${title} does not exist`));
    }
}

// Load notes
function loadNotes() {
    try {
        const noteBuffer = fs.readFileSync('notes.json');
        const noteString = noteBuffer.toString();
        return JSON.parse(noteString);
    } catch (e) {
        return [];
    }

}

// Write to file
function writeFile (fileName, fileContent) {
    const notesJSON = JSON.stringify(fileContent);
    fs.writeFileSync(fileName, notesJSON);
}

module.exports = {
    add: addNote,
    remove: removeNote
};