const express = require('express');
const path = require('path');

const app = express();

// middleware called when there is a request.
// serving static file bundle.js to GET method
// ./dist is where bundle.js located
app.use(express.static(path.join(__dirname,"dist")));

// middleware to handle request GET method
// server responds by sending an index.html file
app.get("/",function(req,res){
    res.sendFile(path.join(__dirname, "index.html"));
})

// listen on port 5000
app.listen(5000);
