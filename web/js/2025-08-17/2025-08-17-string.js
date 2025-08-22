const button2 = document.getElementById("submit-2-1");

function func1() {
    let a = document.getElementById("input-2-1").value;
    let b = document.getElementById("input-2-2").value;
    document.getElementById("output-2-1").textContent = a;
    document.getElementById("output-2-2").textContent = b;
    
    if (a == b) {
        document.getElementById("output-2-3").textContent = "당신이 입력한 값은";
    }
    else {
        document.getElementById("output-2-3").textContent = "output3 is here";
    }
}

const button_3 = document.getElementById("id-button-3");

function func3() {
    const input_3_1 = document.getElementById("id-input-3-1").value;
    const input_3_2 = document.getElementById("id-input-3-2").value;
    const output_3_3 = input_3_1.concat(input_3_2);
    
    document.getElementById("id-output-3").value = output_3_3;
}

const button_4 = document.getElementById("id-button-4-1");

function func_4() {
    let input_4_1 = document.getElementById("id-input-4-1").value;
    let input_4_2 = document.getElementById("id-input-4-2").value;
    
    input_4_1 = input_4_1.toLowerCase();
    input_4_2 = input_4_2.toLowerCase();
    document.getElementById("id-output-4-1").value = input_4_1.indexOf(input_4_2);
}



const form_5 = document.getElementById("id-form-5");

function func_5(event) {
    event.preventDefault();

    const myInput = form_5.elements["name-input-5-1"];
    const myOutput = form_5.elements["name-output-5-1"];
    
    myOutput.value = myInput.value.substring(2);
}

const form_6 = document.getElementById("id-form-6");

function func_6(event) {
    event.preventDefault();
    
    const myInput = form_6.elements["name-input-6-1"];
    const myInput2 = form_6.elements["name-input-6-2"];
    const myOutput = form_6.elements["name-output-6-1"];

    myOutput.value = myInput.value.match(new RegExp(myInput2.value, "ig"));
}

const form_7 = document.getElementById("id-form-7");

function func_7(event) {
    event.preventDefault();
    
    const myInput = form_7.elements["name-input-7-1"];
    const myInput2 = form_7.elements["name-input-7-2"];
    const myInput3 = form_7.elements["name-input-7-3"];
    const myOutput = form_7.elements["name-output-7-1"];

    myOutput.value = myInput.value.replace(new RegExp(myInput2.value, "ig"), myInput3.value);
}


button2.addEventListener("click", func1);

button_3.addEventListener("click", func3);

button_4.addEventListener("click", func_4);

form_5.addEventListener("submit", func_5);

form_6.addEventListener("input", func_6);

form_7.addEventListener("input", func_7);