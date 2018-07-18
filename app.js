console.log("Starting app.js");

const fs= require('fs');
const _=require('lodash');
const yargs=require('yargs');

const notes= require('./notes.js');

var command = process.argv[2];
var argv= yargs.argv;


// console.log("Yargs",argv);
// console.log("Process",process.argv);



if(command==='add'){
  console.log("Adding new note !");
  notes.addNote(argv.title,argv.body);
}else if (command==='list') {
  console.log("Listing a note !");
  notes.getAll();
}else if(command==='read'){
  console.log("Reading a note !");
  notes.getNote(argv.title);
}else if(command==='remove'){
  console.log("Removing a note !");
    notes.remove(argv.title);
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
