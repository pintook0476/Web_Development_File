var express = require('express');
var router = express.Router();
var multer = require("multer");
var path = require("path");

const storage = multer.diskStorage({
    destination: function(req, file, callback) {
        callback(null, './public/images/productUploads');
    },
    // By default, multer removes file extensions so let's add them back
    filename: function(req, file, callback) { 
        file_path = "userImage" + '-' + Date.now() + path.extname(file.originalname); // userImage-123456.png
        callback(null, file_path);
    }
});
var upload = multer({ storage: storage}).single('prodImage');

/* GET home page. */
router.post('/', function(req, res, next) {
    var data = {};
    upload(req, res, function(err) {
        if (err) {
            data.msg = "ERROR"
            console.log(err);
        } else {
            data.file_path = '/images/productUploads/' + file_path;
            data.msg = 'success';
        }
        res.send(JSON.stringify(data));
    });
});

module.exports = router;
