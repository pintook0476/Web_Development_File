var http = require("http");

var fs = require("fs");

var server = http.createServer( (req, res) => {
    var empData = {
        name: 'Raj',
        age: 20,
        gender: 'Male'
    };
    res.writeHead(201, {
        'Content-Type': 'text/plain'
    });

    /*fs.readFile('empData/sampleEmpData.txt', (error, data) => {
        var msg = '';
        if (error) {
            msg = 'Error while reading file : ' + error;
        } else {
            msg = data;
        }
        res.end(msg);
    });*/

    fs.appendFile('empData/newFile.txt', "Some content been added to file - new12" ,(error) => {
        var msg;
        if (error) {
            msg = 'Error while writing content to file';
        } else {
            msg  = 'Succfly Data been written to file'
        }
        res.end(msg);
    })


   

    //empData = JSON.stringify(empData);

    //res.end(empData);



});

server.listen(8081, () => {
    console.log("SErver is listing at 8081");
});;