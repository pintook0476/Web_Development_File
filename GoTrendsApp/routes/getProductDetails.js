var express = require('express');
var router = express.Router();

const { MongoClient } = require("mongodb");

var mongoUrl = 'mongodb://0.0.0.0:27017/';  
const client = new MongoClient(mongoUrl);

var data = {
    "productDetails": []
};

/* GET home page. */
router.post('/', function(req, res, next) {
    getDbConnection(req, res)
    
});

var getDbConnection = async (req, res) => {
    try {
        await client.connect();
        var collectionResult = await client.db("GoTrendz").collection("productDetails").find({}).toArray();
        data.productDetails = collectionResult;
        res.send(JSON.stringify(data));
    } finally {
        client.close();
    }
}

module.exports = router;
