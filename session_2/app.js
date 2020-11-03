const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "newdatabase"
})

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/" + "file.html");
})

app.post("/addUser", (req, res)=> {
    var firstName = req.body.firstName;
    var lastName = req.body.lastName;
    var regNumber = req.body.regNumber;

    var query = 'INSERT INTO USERINFO (firstName, lastName, regNumber) VALUES ( " '+firstName+' ", "'+lastName+'", "'+regNumber+'" )'

    con.query(query, (err, results)=> {
        if(err) {
            res.send(err.message);
        } else {
            console.log("Data is entered.");
            res.send({
                status: 200,
                message: "Data is entered."
            })
        }
    })
})

app.post("/deleteUser", (req, res) => {
    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    let regNumber = req.body.regNumber;
    let query = `DELETE FROM USERINFO WHERE firstName = "${firstName}" AND lastName = "${lastName}" AND regNumber = ${regNumber} `;
    con.query(query, (err, results) => {
      if (err) {
        res.send(err.message);
        // console.log(err);
        console.log(err.message);
      } else {
        console.log("Data has been deleted.");
        res.send({
          status: 200,
          message: "Data is deleted.",
        });
      }
    });
  });
  
  app.post("/updateUser", (req, res) => {
    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    let regNumber = req.body.regNumber;
    let newFirstName = req.body.newFirstName;
    let newLastName = req.body.newLastName;
    let newRegNumber = req.body.newRegNumber;
    let query = `UPDATE USERINFO SET firstName = "${newFirstName}" , lastName = "${newLastName}" , regNumber = ${newRegNumber} WHERE firstName = "${firstName}" AND lastName = "${lastName}" AND regNumber = ${regNumber} `;
    con.query(query, (err, results) => {
      if (err) {
        res.send(err.message);
        // console.log(err);
        console.log(err.message);
      } else {
        console.log("Data has been updated.");
        res.send({
          status: 200,
          message: "Data is updated.",
        });
      }
    });
  });

const PORT = 6001;
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})






// app.get("/updateData", (req, res)=> {
//     res.send("This data is sent updated");
// })

// app.get("/deleteData", (req, res)=> {
//     res.send("This data is sent deleted");
// })