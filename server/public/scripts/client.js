$(document).ready(onReady);

function onReady() {
  console.log("JQ");
  //listeners
  $("#equals").on("click", gatherInfoForPost);
  $("#clear").on("click", empty);

  $(".operator").on("click", identifyOperator);
  $(".num").on("click", appendNum1Val);
  // any initial functions
  getMath();
}
// GLOBAL VARIABLES
let sign = ``;
let num1Select = ``;
let num2Select = ``;
let opIdentified = false;
let num1Val = ``;
let num2Val = ``;
let calcInfo = {};
// FUNCTIONS
function appendNum1Val() {
  console.log("START appendNum1Val");
  num1Select = $(this).text();
  console.log("num1Select", num1Select);

  num1Val += `${num1Select}`;
  console.log("num1Val:", num1Val);
  $("#n1").html(num1Val);

  console.log("END appendNum1Val");

  // if (opIdentified) {
  //   return;
  // }
}

function identifyOperator() {
  console.log("START identifyOperator");
  $(".num").off();
  let operator = $(this).text();
  console.log("operator:", operator);

  if (operator === `+`) {
    sign = `+`;
  } else if (operator === `-`) {
    sign = `-`;
  } else if (operator === `*`) {
    sign = `*`;
  } else if (operator === `/`) {
    sign = `/`;
  } else {
  }
  console.log("sign:", sign);
  $("#op").html(sign);
  opIdentified = true;
  $(".num").on("click", appendNum2Val);
  console.log("END identifyOperator");
}
function appendNum2Val() {
  console.log("START appendNum2Val");

  num2Select = $(this).text();
  console.log("num2Select:", num2Select);

  num2Val += `${num2Select}`;
  console.log("num2Val:", num2Val);
  $("#n2").html(num2Val);
  console.log("END appendNum2Val");
}
function gatherInfoForPost() {
  console.log("START gatherInfoForPost");

  calcInfo = {
    num1: num1Val,
    signOp: sign,
    num2: num2Val,
  };

  console.log("calcInfo now:", calcInfo);

  if (calcInfo.num1 !== "" && calcInfo.signOp !== "" && calcInfo.num2 !== "") {
    postMath();
  } else {
    alert("I think you forgot something!");
  }
  empty();
  console.log("END gatherInfoForPost");
}

// GET
function getMath() {
  $.ajax({ method: "GET", url: "/getCalculation" })
    .then((response) => {
      console.log("Server response:", response);
      render(response);
    })
    .catch((error) => {
      console.log("POST failed");
    });
}
// POST
function postMath() {
  console.log("START POST");
  console.log("calcInfo", calcInfo);
  $.ajax({ method: "POST", url: "/postCalculation", data: calcInfo })
    .then((response) => {
      getMath();
    })
    .catch((error) => {
      console.log("POST failed");
    });
}

function render(response) {
  console.log("START render");
  $("#result").html(
    //result
    `${response.answer}`
  );
  $("#history").empty();
  for (let i of response.history) {
    //history
    $("#history").append(`<li>${i}</li>`);
  }
  $(".num").off();
  $(".num").on("click", appendNum1Val);
  console.log("END render");
}

function empty() {
  $("#n1").empty();
  $("#op").empty();
  $("#n2").empty();
  num1Select = ``;
  num2Select = ``;
  opIdentified = false;
  num1Val = ``;
  num2Val = ``;
}
