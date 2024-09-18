function calculate(operator) {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const resultSpan = document.getElementById("result-value");
    document.getElementById("result").style.color = "black";

    function validateInput(inputId, errorMessage) {
        const input = document.getElementById(inputId);
        const value = parseFloat(input.value);

        if (isNaN(value)) {
            input.style.border = "2px solid red";
            document.getElementById("result-value").textContent = errorMessage;
            return false;
        } else {
            input.style.border = "";
            return true;
        }
    }

    if (!validateInput("num1", "Introdu un număr valid în primul câmp.") ||
        !validateInput("num2", "Introdu un număr valid în al doilea câmp.")) {
        return;
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

