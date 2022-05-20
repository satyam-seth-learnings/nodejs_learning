// Path Module

const path = require('path');

console.log(__filename)
console.log(path.basename('c:\\Users\\LENOVO\\OneDrive\\Programs\\Learning\\nodejs_learnings\\Geekyshows\\5.Path Module(9)\\ch3\\index.js'));
console.log(path.basename(__filename));
console.log(path.basename(__filename, '.js'));

// console.log(path.dirname('c:\\Users\\LENOVO\\OneDrive\\Programs\\Learning\\nodejs_learnings\\Geekyshows\\5.Path Module(9)\\ch3\\index.js'));
// console.log(path.dirname(__filename));

// console.log(path.extname(__filename));

// console.log(path.join('/search', 'label', 'cource/python', 'oop'));
// // The last parameter (..) is insatructing path.join to 'go back a directory'.
// console.log(path.join('/search', 'label', 'course/python', 'oop', '..'));
// console.log(path.join('/search', 'label', 'course/python', 'oop', '..', '..'));
// console.log(path.join(__dirname, 'code', 'allcode.js'));

// console.log(path.normalize('c:\\temp\\\\foo\\bar'));
// console.log(path.normalize('c:\\temp\\\\foo\\bar\\..\\'));
// console.log(path.win32.normalize('c:////temp\\\\/\\/\\/foo/bar'));

// console.log(path.parse(__filename));
// console.log(path.parse(__filename).base);
// console.log(path.parse(__filename).name);

// console.log(path.isAbsolute('//server')); // true
// console.log(path.isAbsolute('\\\\server')); // true
// console.log(path.isAbsolute('C:/foo/..')); // true
// console.log(path.isAbsolute('C:\\foo\\..')); // true
// console.log(path.isAbsolute('bar\\baz')); // false
// console.log(path.isAbsolute('bar/baz')); // false
// console.log(path.isAbsolute('.')); // false