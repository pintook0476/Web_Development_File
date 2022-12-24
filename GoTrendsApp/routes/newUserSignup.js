var express = require('express');
var router = express.Router();
const { MongoClient } = require("mongodb");
var dbUrl = 'mongodb://0.0.0.0:27017';
var client = new MongoClient(dbUrl);

const bcrypt = require('bcrypt');
const saltRounds = 10;


/* GET home page. */
router.post('/', function(req, res, next) {
    var userInputData = req.body;
    encryptCredentials(res, userInputData);
});

var encryptCredentials = (res, userInputData) => {
    bcrypt.hash(userInputData.accountPassword, saltRounds, function(err, hash) {
        console.log("Encrypted Password -> " + hash);
        userInputData.accountPassword = hash;
        doConnection(res, userInputData);
    });
}

var doConnection = async (res, userInputData) => {
    var resObj = {};
    try {
        await client.connect();
        await client.db("GoTrendz").collection("userCredentials").insertOne(userInputData);
        resObj.msg = 'Success';
        res.send(JSON.stringify(resObj));
    } finally {
        client.close();
    }
    
    
}

module.exports = router;
