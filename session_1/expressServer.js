const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json())
app.use(bodyParser.urlencoded())

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/" + "file.html");
})

app.get("/sendData", (req, res)=> {
    console.log(req);
    res.send("This data is sent back");
})

app.get("/updateData", (req, res)=> {
    res.send("This data is sent updated");
})

app.get("/deleteData", (req, res)=> {
    res.send("This data is sent deleted");
})

app.listen(8000, ()=>{
    console.log("Server is running on port 8000");
})