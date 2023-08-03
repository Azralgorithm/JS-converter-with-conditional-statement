let inputVal = document.querySelector("#input");
let dropdown1 = document.querySelector("#dropdown1");
let dropdown2 = document.querySelector("#dropdown2");
let displayResult = document.querySelector("#displayResult");

function roundNumber(number) {
    return Math.round(number*10000000)/10000000
}

function convertInput() {

    // meter

    if (dropdown1.value == "Meter" && dropdown2.value == "Meter") {
        displayResult.innerHTML = parseFloat(inputVal.value); 
    } else if (dropdown1.value == "Meter" && dropdown2.value == "Centimeter") {
        displayResult.innerHTML = parseFloat(inputVal.value) * 100;
    } else if (dropdown1.value == "Meter" && dropdown2.value == "Kilometer") {
        let KM = parseFloat(inputVal.value) / 1000;
        displayResult.innerHTML = roundNumber(KM);
    }

    //centimeter

    if (dropdown1.value == "Centimeter" && dropdown2.value == "Centimeter") {
        displayResult.innerHTML = parseFloat(inputVal.value); 
    } else if (dropdown1.value == "Centimeter" && dropdown2.value == "Meter") {
        displayResult.innerHTML = parseFloat(inputVal.value) / 100;
    } else if (dropdown1.value == "Centimeter" && dropdown2.value == "Kilometer") {
        let KM = parseFloat(inputVal.value) / 100000;
        displayResult.innerHTML = roundNumber(KM);
    }

    // kilometer

    if (dropdown1.value == "Kilometer" && dropdown2.value == "Kilometer") {
        displayResult.innerHTML = parseFloat(inputVal.value); 
    } else if (dropdown1.value == "Kilometer" && dropdown2.value == "Centimeter") {
        displayResult.innerHTML = parseFloat(inputVal.value) * 100000;
    } else if (dropdown1.value == "Kilometer" && dropdown2.value == "Meter") {
        displayResult.innerHTML = parseFloat(inputVal.value) * 1000;
    }
}

function allClr() {
    displayResult.innerHTML = "";
    inputVal.value = "";
}