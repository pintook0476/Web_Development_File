var express = require('express');
var router = express.Router();
const {MongoClient} = require("mongodb");
var dbUrl = 'mongodb://0.0.0.0:27017';
var client = new MongoClient(dbUrl)

/* GET home page. */
router.post('/', function(req, res, next) {
    connectToDb(req, res);    
});

var  connectToDb = async (req, res) => {
    var productDetails = req.body;
    try {
        await client.connect();
        await client.db("GoTrendz").collection("productDetails").insertOne(productDetails);
        res.send(JSON.stringify({msg: 'Success'}));
    } finally {
        client.close();
    }
}

module.exports = router;
