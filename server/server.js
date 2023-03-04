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
const math = {
  history: [],
  answer: 0,
};

// app.get('/route', )
app.get("/getCalculation", (req, res) => {
  console.log("Get REQUEST recieved");

  res.send(math);
});
// app.post('/route',)
app.post("/postCalculation", (req, res) => {
  console.log("Post REQUEST recieved", req.body);
  //logic
  //convert string to NUMBER
  let num1 = Number(req.body.num1);
  let num2 = Number(req.body.num2);
  let sign = req.body.signOp;
  let result = 0;

  if (sign === "+") {
    result = num1 + num2;
    console.log("Result +:", result);
  } else if (sign === "-") {
    result = num1 - num2;
    console.log("Result -:", result);
  } else if (sign === "*") {
    result = num1 * num2;
    console.log("Result *:", result);
  } else if (sign === "/") {
    result = num1 / num2;
    console.log("Result /:", result);
  } else {
    console.log("Calculation Error");
  }
  // assign new value to answer key in math object
  math.answer = result;
  // push equation string into math object array - math.history.push();
  let equation = `${num1}${sign}${num2}=${result}`;
  math.history.push(equation);

  console.log("math", math);
  // mathHistory.push(calcObj);

  res.sendStatus(201);
});
