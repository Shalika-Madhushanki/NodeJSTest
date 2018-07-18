// var personObj={
//     name:"Shalika",
//     age: 24
// }
//
// var personStr= JSON.stringify(personObj);
// console.log("Object to string");
// console.log(typeof personStr+" is");
// console.log(personStr);
//
//
// console.log("\nObject to string");
// var personString= '{"name": "Shalika", "age": 24}';
// var personObject= JSON.parse(personString);
// console.log(typeof personObject+" is");
// console.log(personObject);

const fs = require('fs');

var originalNote = {
    title : "Some title",
    body : "Some test note"
}

var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json',originalNoteString);


var noteString= fs.readFileSync('notes.json');

var note = JSON.parse(noteString);
console.log(typeof note);
console.log(note.title);

