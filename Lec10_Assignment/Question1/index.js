const fs = require('fs');

let data = function test() {
    let arr = [];
    for (let i = 0; i < 100; i++){
        arr.push(Math.random() * 100);
    }
    return arr;
}

fs.writeFileSync('file.txt', `${data()}`);
fs.readFile('file.txt', 'utf8', function (err, data) {
    data = data.split(',').sort(function (a, b) {
        return a - b;
    })
    console.log(data);
   fs.writeFileSync('file.txt', `${data}`);
});

