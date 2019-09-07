const fs = require('fs');

fs.writeFileSync('notes.txt', 'this second file was created by nodejs');

fs.appendFileSync('notes.txt', '\nthis is appended text');