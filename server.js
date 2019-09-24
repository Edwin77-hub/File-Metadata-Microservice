
var express = require('express');
var app = express();
var bodyParser = require("body-parser");
var cors = require("cors");
var multer = require("multer");
var upload = multer({
dist: "uploads/"
});

app.use(bodyParser.json());
app.use(cors());



app.use(express.static('public'));


app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});


app.post("/upload/file", upload.single("file"), (request, response) => {
  
  response.json({
    size:request.file.size
  });
  
})

var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
