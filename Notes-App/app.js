
console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');
const _ = require('lodash');

//console.log('Hello ' + user.username);

// var res = notes.addNote();
// console.log(res);

// var user = os.userInfo();
// fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age} years old!`, function (err) {
//     if (err) { 
//         console.log('Unable to write to file');
//     }
// });

console.log(notes.add(10,15));

