// File System - Callback API
import * as fs from 'fs';

// Creating Directory - Path should be there
// fs.mkdir('C:\\Users\\LENOVO\\OneDrive\\Programs\\Learning\\nodejs_learnings\\Geekyshows\\7.File System Module(11)\\ch7\\geek', (error) => {
//     if (error) throw error;
//     console.log('Directory Created...');
// });

// Creating Directory - Path is not required to be there
// fs.mkdir('C:\\Users\\LENOVO\\OneDrive\\Programs\\Learning\\nodejs_learnings\\Geekyshows\\7.File System Module(11)\\ch7\\test\\demo', { recursive: true }, (error) => {
//     if (error) throw error;
//     console.log('Directory Created...');
// });

// Read content of Directory
// fs.readdir('C:\\Users\\LENOVO\\OneDrive\\Programs\\Learning\\nodejs_learnings\\Geekyshows\\7.File System Module(11)\\ch7\\test', (error, files) => {
//     if (error) throw error;
//     for (const file of files)
//         console.log(file);
// });

// Remove Directory -n Directory should be empty
// fs.rmdir('C:\\Users\\LENOVO\\OneDrive\\Programs\\Learning\\nodejs_learnings\\Geekyshows\\7.File System Module(11)\\ch7\\test\\demo', (error) => {
//     if (error) throw error;
//     console.log('Directory Removed...');
// });

// Create and Write File
// // fs.writeFile('readme.txt', 'GeekyShows',(error) => {
// fs.writeFile('readme.txt', 'Hello Node JS',(error) => {
//     if (error) throw error;
//     console.log('File Created...');
// });

// Read File
// // fs.readFile('readme.txt', (error, data) => {
// fs.readFile('readme.txt', 'utf-8', (error, data) => {
//     if (error) throw error;
//     console.log(data);
// });

// Append Data into File
// fs.appendFile('readme.txt', ' GeekyShows', (error) => {
//     if (error) throw error;
//     console.log("Data Appended...");
// })

// Copy File
// fs.copyFile('readme.txt', 'info.txt', (error) => {
//     if (error) throw error;
//     console.log("File Copied...");
// })

// Get File Information
fs.stat('C:\\Users\\LENOVO\\OneDrive\\Programs\\Learning\\nodejs_learnings\\Geekyshows\\7.File System Module(11)\\ch7\\test\\emp.js', (error, stats) => {
    if (error) throw error;
    console.log(stats.isDirectory());
    console.log(stats.isFile());
    console.log(stats);
});
