// console.log("Starting notes.js");

const fs = require('fs');

var fetchNotes = () => {
    try{
        var stringNotes = fs.readFileSync('note-data.json') ;
        return JSON.parse(stringNotes);
    }catch (e) {
      return [];
    }
}

var saveNotes = (notes) => {
  fs.writeFileSync('note-data.json',JSON.stringify(notes));
}


var addNote = (title,body) => {

  var notes = fetchNotes();
  var note = {title,body};
  // fs.exists('./note-data.json', function (exists) {
  //   if (exists) {
  //     console.log("existence "+exists);
  //     var stringNotes = fs.readFileSync('note-data.json') ;
  //     notes=JSON.parse(stringNotes);
  //     console.log("Notes array inside",notes);
  //   }
  // });
  var duplicateNotes = notes.filter((note)=> note.title===title);
  // same as above---- var duplicateNotes = notes.filter((note)=>{return note.title===title});
    if (duplicateNotes.length === 0){
        notes.push(note);
        saveNotes(notes);
        return note;
    }
};

var getAll = () => {
  return fetchNotes();
  
  console.log("Listing all notes");
};

var getNote =(title) => {
    var notes = fetchNotes();
    var filteredNote = notes.filter((note)=> note.title === title);
    // console.log("title : ",filteredNote.title,"\nbody :",filteredNote.body);
    return filteredNote[0];
};

var remove = (title) => {
    var notes = fetchNotes();
    var filteredNotes = notes.filter((note)=> note.title !==title);
    saveNotes(filteredNotes);
    return notes.length !== filteredNotes.length;
};

var logNote = (note) => {
    console.log("--");
    console.log(`Title : ${note.title}`);
    console.log(`body : ${note.body}`);
};

module.exports={
  addNote,
    getAll,
    getNote,
    remove,
    logNote
};




