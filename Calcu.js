
const numselected = document.getElementsByName('clicked-number');
const operselected = document.getElementsByName('clicked-operation');
const cleardisplay = document.getElementsByName('clicked-clear')[0];
const resultselected = document.getElementsByName('clicked-result')[0]
var display = document.getElementById('resultado');
var currentOpe = '';
var previousOpe = '';
var operation = undefined;
console.log(numselected);


//  ******** Captura de elementos seleccionados ***********  //
numselected.forEach(function (boton) {
    boton.addEventListener('click', function () {
        addnum(boton.innerText);
    })
})

operselected.forEach(function (boton) {
    boton.addEventListener('click', function () {
        selectedOperation(boton.innerText);
        console.log(boton.innerText);
    })
})

resultselected.addEventListener('click', function () {
    calculate();
    updatedisplay();
})

cleardisplay.addEventListener('click', function () {
    clear();
    updatedisplay();
})



// Operaciones 


//Función para adicionar numeros al display (concatena un número con el siguiente que se digite)
function addnum(num) {
    currentOpe = currentOpe.toString() + num.toString();
    updatedisplay();
}
// Función para actualizar el display (Mostrar en pantalla los numeros digitados)
function updatedisplay() {
    display.value = currentOpe;
}

//Función para limpiar el display
function clear() {
    currentOpe = '';
    previousOpe = '';
    operation = undefined;
}

//Función para Seleccionar la operación a realizar
function selectedOperation(op) {
    if (currentOpe === '') return;
    if (previousOpe !== '') {
        calculate();
    }
    operation = op.toString();
    previousOpe = currentOpe;
    currentOpe = '';
}

//Función para realizar la operación
function calculate() {
    var calcular;
    const previous = parseFloat(previousOpe);
    const current = parseFloat(currentOpe);
    if (isNaN(previous) || isNaN(current)) return;

    switch (operation) {
        case '+':
            calcular = previous + current;
            break;
        case '-':
            calcular = previous - current;
            break;
        case '/':
            calcular = previous / current;
            break;
        case 'x':
            calcular = previous * current;
            break;
    default:
            return;
    }

    currentOpe = calcular;
    operation = undefined;
    previousOpe = '';
}


clear();

