const fs= require('fs');
const _=require('lodash');
const yargs=require('yargs');

const notes= require('./notes.js');

//var command = process.argv[2];
var argv= yargs.argv;
var command = argv._[0];


//console.log("Yargs",argv);
// console.log("Process",process.argv);


if(command==='add'){
  var note = notes.addNote(argv.title,argv.body);
    console.log("Note "+note.title+" created !");
    notes.logNote(note);
}else if (command==='list') {
  var allNotes = notes.getAll();
    console.log("Listing "+allNotes.length+ " note(s).");
    allNotes.forEach((note)=> notes.logNote(note));


}else if(command==='read'){
  console.log("Reading a note !");
  var note =notes.getNote(argv.title);
  if (note){
      console.log("Note found !");
      notes.logNote(note);
  }else{
      console.log("Note note found !");

  }

}else if(command==='remove'){
  console.log("Removing a note !");
  var noteRemoved = notes.remove(argv.title);
  var message = noteRemoved ? "Note '"+argv.title+"' was removed !": 'note not found !';
  console.log(message);

}else{
  console.log("command not recognized !");
}












// const os=require('os');
// var user=os.userInfo();
// // var res=notes.create();
// var filteredArray= _.uniq(['Shalika',1,'Shalika']);
// console.log('Hello '+user.username);
// console.log(filteredArray);
// fs.appendFileSync('greetings.txt',` Hello  ${ user.username} !`);
// fs.appendFileSync('greetings.txt','Hello World !');
// fs.appendFileSync('greetings.txt',res);
// console.log(_.isString("Shalika"));
// console.log(_.isString(123));
