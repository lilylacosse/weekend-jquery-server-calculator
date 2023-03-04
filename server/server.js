const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 5000;

app.use(express.static("server/public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log("listening on port", port);
});

// global variables

// app.get('/route', )
app.get("");
// app.post('/route',)
app.post("/postCalculation", (req, res) => {
  console.log("post request recieved");

  //convert string to NUMBER
  //logic
});
