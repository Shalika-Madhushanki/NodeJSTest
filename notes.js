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
        console.log("Added note : title as '"+title+ "' with the text of '"+body+"'");
    }else{
        console.log("Title already existing");
    }
};

var getAll = () => {
  var notes=fetchNotes();
  
  console.log("Listing all notes");
};

var getNote =(title) => {
    console.log("Listing ", title, "note");
}

var remove = (title) => {
  console.log("Removed",title,"note");
}

module.exports={
  addNote,
    getAll,
    getNote,
    remove
};




