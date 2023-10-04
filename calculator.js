let currentInput = '';
let currentResult = '';

function appendToDisplay(value) {
    currentInput += value;
    document.getElementById('display').value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    currentResult = '';
    document.getElementById('display').value = '';
}

function calculate() {
    try {
        currentResult = eval(currentInput);
        document.getElementById('display').value = currentResult;
        currentInput = currentResult.toString();
    } catch (error) {
        document.getElementById('display').value = 'Error';
        currentInput = '';
    }
}

function deleteLastCharacter() {
    currentInput = currentInput.slice(0, -1); // Remove the last character
    document.getElementById('display').value = currentInput;
}