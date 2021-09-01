const { people, ages } = require('./people');//Importing people.js file into modules.js

console.log(people, ages);//An empty object
//console.log(people);//Trying to access var people in people.js

const os = require('os');
console.log(os.platform(), os.homedir());