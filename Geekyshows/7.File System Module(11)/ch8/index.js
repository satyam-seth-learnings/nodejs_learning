// File System - Synchronous API
import * as fs from 'fs';

// Creating Directory Path should be there
// fs.mkdirSync('C:\\Users\\LENOVO\\OneDrive\\Programs\\Learning\\nodejs_learnings\\Geekyshows\\7.File System Module(11)\\ch8\\geek');

// Creating Directory Path is not required to be there
// fs.mkdirSync('C:\\Users\\LENOVO\\OneDrive\\Programs\\Learning\\nodejs_learnings\\Geekyshows\\7.File System Module(11)\\ch8\\test\\demo', { recursive: true });


// Read Content of Directory
// const files = fs.readdirSync('C:\\Users\\LENOVO\\OneDrive\\Programs\\Learning\\nodejs_learnings\\Geekyshows\\7.File System Module(11)\\ch8\\test');
// for (const file of files)
//     console.log(file);

// Remove Directory - Directory should be empty
// fs.rmdirSync('C:\\Users\\LENOVO\\OneDrive\\Programs\\Learning\\nodejs_learnings\\Geekyshows\\7.File System Module(11)\\ch8\\test\\demo');


// Create and Write File
// fs.writeFileSync('readme.txt', 'Hello Node JS');

// Read File
// // const data = fs.readFileSync('readme.txt');
// const data = fs.readFileSync('readme.txt', 'utf-8');
// console.log(data);

// Append Data into File
// fs.appendFileSync('readme.txt', ' Hello GeekyShows');

// Copy File
// fs.copyFileSync('readme.txt', 'info.txt');

// Get File Information
const stats = fs.statSync('C:\\Users\\LENOVO\\OneDrive\\Programs\\Learning\\nodejs_learnings\\Geekyshows\\7.File System Module(11)\\ch8\\test\\emp.js');
console.log(stats.isDirectory());
console.log(stats.isFile());
console.log(stats);