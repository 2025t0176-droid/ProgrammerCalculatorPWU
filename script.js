let currentInput = "0";

function updateDisplay() {
    const display = document.getElementById("display");
    display.innerText = currentInput;
    
    let num = parseInt(currentInput, 10);
    if (!isNaN(num)) {
        document.getElementById("hex-val").innerText = num.toString(16).toUpperCase();
        document.getElementById("dec-val").innerText = num.toString(10);
        document.getElementById("oct-val").innerText = num.toString(8);
        document.getElementById("bin-val").innerText = num.toString(2).padStart(8, '0');
    }
}

function appendToDisplay(value) {
    if (currentInput === "0" && value !== ".") currentInput = value;
    else if (currentInput.length < 14) currentInput += value;
    updateDisplay();
}

function clearDisplay() {
    currentInput = "0";
    updateDisplay();
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    if (currentInput === "") currentInput = "0";
    updateDisplay();
}

function calculate() {
    try {
        currentInput = eval(currentInput).toString();
    } catch (e) {
        currentInput = "ERR";
    }
    updateDisplay();
}
