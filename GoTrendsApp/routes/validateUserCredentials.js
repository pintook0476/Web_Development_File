var express = require('express');
var router = express.Router();
const { MongoClient } = require("mongodb");

var mongoUrl = 'mongodb://0.0.0.0:27017/';  
const client = new MongoClient(mongoUrl);

const bcrypt = require('bcrypt');

/* GET home page. */
router.post('/', function(req, res, next) {
    doConnection(req, res);    
});

var doConnection = async (req , res) => {
    var resData = {};
    try {
        // Connect the client to the server (optional starting in v4.7)
        await client.connect();
        // Establish and verify connection
        var accountPwd = req.body.accountPassword;
        var inputQueryObject = {accountId: req.body.accountId};
        var collectionResult = await client.db("GoTrendz").collection("userCredentials").find(inputQueryObject).toArray();
        if (collectionResult.length == 1) {
            bcrypt.compare(req.body.accountPassword, collectionResult[0].accountPassword, function(err, result) {
                if (result) {
                    resData.msg  = 'Valid';
                    resData.info = 'Valid User Credentials';
                    /*if (collectionResult[0].isAdmin) {
                        resData.isAdmin = true;
                    } else {
                        resData.isAdmin = false;
                    }*/

                    resData.isAdmin = collectionResult[0].isAdmin ? true : false;
                } else {
                    resData.msg  = 'Invalid';
                    resData.info = 'Invalid Password - do recheck';
                }
                res.send(JSON.stringify(resData));
            });
            
        } else {
            resData.msg = 'Invalid';
            resData.info = 'Not able to find  user with provided Id';
            res.send(JSON.stringify(resData));
        }
        
      } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
      }
}

module.exports = router;
