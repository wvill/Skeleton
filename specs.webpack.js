import angular from 'angular';

let context = require.context('./client/app', true, /\.spec\.js/);
console.log('KEYS', context, context.keys());
//console.log(context, context.keys());
// Get all files and foreach call the context function
// that will require the file and load it up here.
context.keys().forEach(context);