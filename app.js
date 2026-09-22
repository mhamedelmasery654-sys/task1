const fs = require('fs');
const myemitter = require('./event');

let text1 = '';
let text2 = '';
let filesLoaded = 0;

myemitter.on('fileLoaded', () => {
    filesLoaded++;
    if (filesLoaded === 2) {
        myemitter.emit('mergeFiles');
    }
});

myemitter.on('mergeFiles', () => {
    const combinedText = text1 + '\n\n' + text2;
    fs.writeFile('final.txt', combinedText, (err) => {
        if (err) throw err;
        console.log('Success! Both files were merged into final.txt');
    });
});

console.log('Start reading files asynchronously...');

fs.readFile('file1.txt', 'utf8', (err, data) => {
    if (err) throw err;
    text1 = data;
    myemitter.emit('fileLoaded');
});

fs.readFile('file2.txt', 'utf8', (err, data) => {
    if (err) throw err;
    text2 = data;
    myemitter.emit('fileLoaded');
});
