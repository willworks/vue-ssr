import fs from 'fs';

// async
fs.readFile('scripts/postinstall.sh', function (err, data) {
  if (err) {
    return console.error(err);
  }
  console.log("read async: " + data.toString());
});

// sync
var data = fs.readFileSync('scripts/postinstall.sh');
console.log("read sync: " + data.toString());

console.log("done");