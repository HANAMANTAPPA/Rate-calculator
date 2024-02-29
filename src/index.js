const path = require("path");
const express = require("express");
const collection = require("./config");

const app = express();
// convert data into json format
app.use(express.json());
// Static file
app.use(express.static("public"));

app.use(express.urlencoded({ extended: false }));
//use EJS as the view engine
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("home");
  //   res.send("asdasdasd");
});

// Register User
app.post("/", async (req, res) => {
  try {
    const data = {
      district: req.body.to,
      weight: req.body.weight,
      //   password: req.body.password,
    };
    // console.log(data);

    const dbdata = await collection.findOne({ district: data.district });

    if (dbdata) {
      // window.alert('User already exists. Please choose a different username.');
      res.send(
        `<h1  style="text-align: center;">Rate is := 
        ${dbdata.value * data.weight} </h1>`
      );
    } else {
      res.send("somehing went wrong with db and data from client");
    }
  } catch {
    res.send("somehing went wrong");
  }
});

// Define Port for Application
const port = 5000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
