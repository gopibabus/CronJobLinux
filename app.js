const fs = require('fs');

let timeStamp = Math.floor(Date.now() / 1000);

fs.open('/path/to/create/'+timeStamp+'.txt', 'w', function (err, file) {
  if (err) throw err;
  console.log('File Created with Javascript!');
});