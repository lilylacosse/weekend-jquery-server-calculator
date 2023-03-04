$(document).ready(onReady);

function onReady() {
  console.log("JQ");
  //listeners
  // 🔴
  //$().on("click", getMath);
  $("#equals").on("click", gatherInfoForPost);

  $("#add").on("click", add);
  $("#sub").on("click", subtract);
  $("#multiply").on("click", multiply);
  $("#divide").on("click", divide);

  // any initial functions
}
// GLOBAL VARIABLES
let sign = ``;
let num1Val = 0;
let num2Val = 0;
let calcInfo = {};
// FUNCTIONS

function add() {
  sign = `+`;
  console.log("sign:", sign);
}
function subtract() {
  sign = `-`;
  console.log("sign:", sign);
}
function multiply() {
  sign = `*`;
  console.log("sign:", sign);
}
function divide() {
  sign = `/`;
  console.log("sign:", sign);
}

function gatherInfoForPost() {
  num1Val = $("#num1").val();
  console.log("num1Val", num1Val);

  num2Val = $("#num2").val();
  console.log("num2Val:", num2Val);

  calcInfo = {
    num1: num1Val,
    signOp: sign,
    num2: num2Val,
  };

  console.log("calcInfo now:", calcInfo);

  postMath();
}

// GET
function getMath() {
  $.ajax({ method: "GET", url: "/getCalculation" }).then().catch();
}
// POST
function postMath() {
  console.log("START POST");
  console.log("calcInfo", calcInfo);
  $.ajax({ method: "GET", url: "/postCalculation", data: calcInfo })
    .then()
    .catch();
}
