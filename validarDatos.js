
var id = document.getElementById('id');
var names = document.getElementById('names');
var cel = document.getElementById('cel');
var email = document.getElementById('email');
var area = document.getElementById('area');
var cargo = document.getElementById('cargo');
var error = document.getElementById('error');
var departamento = document.getElementById('departamento');
var time = document.getElementById('time');
var dia = document.getElementById('dia');

var errorId = document.getElementById('errorId');
var errorNAmes = document.getElementById('errorNAmes');
var errorCel = document.getElementById('errorCel');
var errorEmail = document.getElementById('errorEmail');
var errorArea = document.getElementById('errorArea');
var errorCargo = document.getElementById('errorCargo');
var errorDepart = document.getElementById('errorDepart');
var errorTime = document.getElementById('errorTime');
var errorDia = document.getElementById('errorDia');




function enviarFormulario() {

    var idData = id.value;
    var namesData = names.value;
    var celData = cel.value;
    var emailData = email.value;
    var areaData = area.value;
    var cargoData = cargo.value;
    var departamentoData = departamento.value;
    var timeData = time.value;
    var diaData = dia.value;
    expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;



    // Validación del campo ID
    if (idData === null || idData === '') {
        errorId = 'Ingresa tu Id';
        document.getElementById("errorId").innerHTML = errorId;
        errorId = '';
    }
    else if (isNaN(parseInt(idData))) {
        errorId = 'El campo debe de ser Numérico';
        document.getElementById("errorId").innerHTML = errorId;
        errorId = '';
    }
    else if (idData.length >= 1 && idData.length <= 6) {
        errorId = 'Identificación incompleta';
        document.getElementById("errorId").innerHTML = errorId;
        errorId = '';
    }
    else {
        errorId = '';
        document.getElementById("errorId").innerHTML = errorId;
    }


    //Vvalidación campo Nombre
    if (namesData === null || namesData === '') {
        errorNAmes = 'Ingresa tus Nombres';
        document.getElementById("errorNAmes").innerHTML = errorNAmes;
        errorNAmes = '';
    }else if (namesData.length >=1 && namesData.length <=3) {
        errorNAmes = 'Nombres Incompletos';
        document.getElementById("errorNAmes").innerHTML = errorNAmes;
        errorNAmes = '';
    }else if (!isNaN(parseInt(namesData))) {
        errorNAmes = 'Nombres No deben ser numéricos';
        document.getElementById("errorNAmes").innerHTML = errorNAmes;
        errorNAmes = '';
    } else {
        errorNAmes = '';
        document.getElementById("errorNAmes").innerHTML = errorNAmes;
    }

    //Validación Número Celular
    if (celData === null || celData === '') {
        errorCel = 'Ingresa tu número de celular';
        document.getElementById("errorCel").innerHTML = errorCel;
    }else if (isNaN(parseInt(celData))) {
            errorCel = 'Celular debe ser Numérico';
            document.getElementById("errorCel").innerHTML = errorCel;   
    }else if (celData.length >=1 && celData.length <=6) {
        errorCel = 'Núero de celular Incompleto';
        document.getElementById("errorCel").innerHTML = errorCel;
    } else {
        errorCel = '';
        document.getElementById("errorCel").innerHTML = errorCel;
    }

    //Validación email
    if ( !expr.test(emailData) ){
        errorEmail = 'Emai Inválido';
        document.getElementById("errorEmail").innerHTML = errorEmail;
    }else{
        errorEmail = '';
        document.getElementById("errorEmail").innerHTML = errorEmail;
    }

    //Validar Área Operación
    if (areaData === null || areaData === '') {
        errorArea = 'Ingresa tu Área/Operación';
        document.getElementById("errorArea").innerHTML = errorArea;
    }else if (!isNaN(parseInt(areaData))) {
        errorArea = 'Área/Operación No debe ser Numérico';
            document.getElementById("errorArea").innerHTML = errorArea;   
    }else if (areaData.length >=1 && areaData.length <4) {
        errorArea = 'Área/Operación Incompleto';
        document.getElementById("errorArea").innerHTML = errorArea;
    } else {
        errorArea = '';
        document.getElementById("errorArea").innerHTML = errorArea;
    }

    //Validar Cargo
    if (cargoData === null || cargoData === '') {
        errorCargo = 'Ingresa tu Cargo';
        document.getElementById("errorCargo").innerHTML = errorCargo;
    }else if (!isNaN(parseInt(cargoData))) {
        errorCargo = 'Cargo No debe ser Numérico';
            document.getElementById("errorCargo").innerHTML = errorCargo;   
    }else if (cargoData.length >=1 && cargoData.length <4) {
        errorCargo = 'cargo Incompleto';
        document.getElementById("errorCargo").innerHTML = errorCargo;
    } else {
        errorCargo = '';
        document.getElementById("errorCargo").innerHTML = errorCargo;
    }

    //Validar Departamento
    if (departamentoData == '0') {
        errorDepart = 'Debe seleccionar un Departamento';
        document.getElementById("errorDepart").innerHTML = errorDepart; 
    }else{
        errorDepart = '';
        document.getElementById("errorDepart").innerHTML = errorDepart;
    }

    //validar Time
    if (timeData.length < 0 || timeData == '' ) {
        errorTime = 'Debe seleccionar una hora';
        document.getElementById("errorTime").innerHTML = errorTime; 
    }else{
        errorTime = '';
        document.getElementById("errorTime").innerHTML = errorTime;
    }

    //validar Día
    if (diaData == '0') {
        errorDia = 'Debe seleccionar un Día';
        document.getElementById("errorDia").innerHTML = errorDia; 
    }else{
        errorDia = '';
        document.getElementById("errorDia").innerHTML = errorDia;   
    }


    return false;

}