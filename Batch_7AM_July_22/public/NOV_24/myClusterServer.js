var http = require("http");
var os = require("os");
var cluster = require("cluster");
console.log(os.cpus().length);

console.log(cluster.isPrimary);
if (cluster.isPrimary) {
    for (var i = 0 ; i < os.cpus().length; i++) {
        cluster.fork();
    }
} else {

    var server = http.createServer((req, res) => {
        res.writeHead(200);
        res.end("Hello all from " + process.pid );
    });

    server.listen(8082, () => {
        console.log("Server lisiting at 8082 " + process.pid);
    });
}