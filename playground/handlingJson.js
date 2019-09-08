const fs = require('fs');

const fileBuffer = fs.readFileSync('1-json.json');
const parsedObject = JSON.parse(fileBuffer.toString());

parsedObject.name =  'Jose Antonio';
parsedObject.age = 25;

const newJSON = JSON.stringify(parsedObject);
// console.log(newJSON);
fs.writeFileSync('1-json.json', newJSON);