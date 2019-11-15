//Server file
const express = require('express');
const app = express();
app.use(express.static(__dirname + "/public/dist/public"));
app.listen(9999, console.log("APP IS RUNNING ON PORT 9999"));