
console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');
const _ = require('lodash');

////lodash isString()
//onsole.log(_.isString(true));
//console.log(_.isString('TittySprinkles'));

//lodash _.uniq()
var filteredArray = _.uniq([2,1,2,4,4,'Nick','Nick']);
console.log(filteredArray);


// var res = notes.addNote();
// console.log(res);

////use os to get username and update log file.
// var user = os.userInfo();
// fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age} years old!`, function (err) {
//     if (err) { 
//         console.log('Unable to write to file');
//     }
// });

////addition function from notes module
//console.log(notes.add(10,15));

