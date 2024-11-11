let isDegree = true;

function clearDisplay() {
    document.getElementById('display').value = '';
}

function toggleAngleUnit() {
    isDegree = !isDegree;
    document.getElementById('angleUnitButton').innerText = isDegree ? 'Deg' : 'Rad';
}

function appendValue(value) {
    document.getElementById('display').value += value;
}

function appendTrigFunction(func) {
    const display = document.getElementById('display');
    const angleConversion = isDegree ? ` * (Math.PI / 180)` : '';
    display.value += `Math.${func}(` + angleConversion;
}

function calculate() {
    try {
        const display = document.getElementById('display');
        display.value = eval(display.value);
    } catch (error) {
        alert('Erro na expressão');
    }
}