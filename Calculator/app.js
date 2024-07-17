let display = document.getElementById('display');
let resultDisplayed = false;

// Function to append value to the display
function appendValue(value) {
    if (resultDisplayed) {
        display.value = value;
        resultDisplayed = false;
    } else {
        display.value += value;
    }
}

// Function to clear the display
function clearDisplay() {
    display.value = '';
}

// Function to delete the last character
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Function to handle square root button click
function appendSqrt() {
    if (resultDisplayed) {
        display.value = '√(';
        resultDisplayed = false;
    } else {
        display.value += '√(';
    }
}

// Function to evaluate the expression
function evaluateExpression() {
    try {
        let expression = display.value;
        // Replace √ with Math.sqrt
        expression = expression.replace(/√\(/g, 'Math.sqrt(');
        display.value = eval(expression);
        resultDisplayed = true;
    } catch (e) {
        display.value = 'Error';
    }
}
// Function to handle keyboard input
function handleKeydown(event) {
    const key = event.key;
    if (document.activeElement === display) {
         if (key === 'Enter') {
            evaluateExpression();
        } else if (key === 'Backspace') {
            deleteLast();
        } else if (key === 'Escape') {
            clearDisplay();
        }
        return; 
    }
    
    if (key >= '0' && key <= '9') {
        appendValue(key);
    } else if (key === '+') {
        appendValue('+');
    } else if (key === '-') {
        appendValue('-');
    } else if (key === '*') {
        appendValue('*');
    } else if (key === '/') {
        appendValue('/');
    }else if (key === '%') {
        appendValue('%');
    } else if (key === '.') {
        appendValue('.');
    } else if (key === '(') {
        appendValue('(');
    } else if (key === ')') {
        appendValue(')');
    } else if (key === 'Enter') {
        evaluateExpression();
    } else if (key === 'Backspace') {
        deleteLast();
    } else if (key === 'Escape') {
        clearDisplay();
    }
}

// Add event listener for keydown events
document.addEventListener('keydown', handleKeydown);

