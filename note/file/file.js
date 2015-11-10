var fs = require('fs');
fs.readFile("file.xlsx", "utf-8", function(err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});