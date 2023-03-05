$(".operator").on("click", identifyOperator);

function identifyOperator() {
  console.log("START identifyOperator");
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
  $("#display").append(sign);
  console.log("END identifyOperator");
}

function appendAndGatherForPost() {
  console.log("START appendAndGatherForPost");
  numSelect = $(this).text();
  console.log("numSelect", numSelect);

  num1Val += `${numSelect}`;
  console.log("num1Val:", num1Val);

  console.log("END appendAndGatherForPost");
}

// if (identifyOperator()) {
}
