function calculate(operator) {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const resultSpan = document.getElementById("result-value");
    document.getElementById("result").style.color = "black";

if (isNaN(num1)) {
    document.getElementById("num1").style.border = "2px solid red";
    resultSpan.textContent = "Introdu un număr valid în primul câmp.";
    return;
} else {
    document.getElementById("num1").style.border = "";
}

if (isNaN(num2)) {
    document.getElementById("num2").style.border = "2px solid red";
    resultSpan.textContent = "Introdu un număr valid în al doilea câmp.";
    return;
} else {
    document.getElementById("num2").style.border = "";
}

let result;

switch (operator) {
    case "+":
    result = (num1 + num2).toFixed(2); // Round the result to 2 decimal places
    break;
    case "-":
    result = (num1 - num2).toFixed(2); // Round the result to 2 decimal places
    break;
    case "*":
    result = (num1 * num2).toFixed(2); // Round the result to 2 decimal places
    break;
    case "/":
    if (num2 === 0) {
        result = "împărțirea la zero nu este permisă.";
        document.getElementById("result").style.color = "red";
    } else {
        result = (num1 / num2).toFixed(2); // Round the result to 2 decimal places
    }
    break;
    default:
    result = "Operator invalid";
}

resultSpan.textContent = result;
}

// Event listeners for each button
document.getElementById("add").addEventListener("click", () => calculate("+"));
document.getElementById("subtract").addEventListener("click", () => calculate("-"));
document.getElementById("multiply").addEventListener("click", () => calculate("*"));
document.getElementById("divide").addEventListener("click", () => calculate("/"));

function clearFields() {
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
    document.getElementById('result-value').innerHTML = '<i class="fa fa-window-minimize fa-beat-fade"></i>';
    document.getElementById('result').style.color = 'black';
}

