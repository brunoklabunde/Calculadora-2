let result = document.getElementByld("result");

function getResult(value) {
  if(value === "=") {
    result.value = eval(result.value)
  } else {
    result.value += value;
  }
}

function clearResult() {
  result.value = "";
}
