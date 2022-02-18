const fs = require('fs'); // file system 모듈을 다룰 수 있게 된다.
fs.readFile('sample.txt', 'utf8', (err,data)=> {
  // if (err) throw err;
  console.log(data);
});