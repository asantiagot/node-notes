const fs = require('fs');

const fileBuffer = fs.readFileSync('1-json.json');
const parsedFile = JSON.parse(fileBuffer.toString());

parsedFile.name =  'Antonio';
parsedFile.age = 25;

const newJSON = JSON.stringify(parsedFile);
// console.log(newJSON);
fs.writeFileSync('1-json.json', newJSON);