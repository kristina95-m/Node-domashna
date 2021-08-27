const fs = require('fs');

fs.readFile('sometext.txt', 'utf8', (err, data) => {
    console.log(data);
});


const a = 'Start now';

fs.writeFile('sometext.txt', a, () => {
    console.log('It will be a long process')
});


fs.appendFile('sometext.txt', a, () => {
    console.log('You have to study harder')
});


const url = require('url');

const urlLink = 'localhost:50/get?year=2021&month=aug&day=27&active=1';
 const urlObject = url.parse(urlLink);
 console.log(urlObject.port);
 console.log(urlObject.pathname);
 console.log(urlObject.query);


const os = require('os');
console.log(os.hostname());
console.log(os.totalmem());
console.log(os.version());
 




