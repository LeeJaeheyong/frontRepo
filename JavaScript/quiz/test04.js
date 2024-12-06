function inputAbs(){
    let firstNum = document.getElementById("1st");
    let firstResult = document.getElementById("1st-result");
    let result = Math.abs(firstNum.value);   
    firstResult.textContent = result;
}
function inputLength(){
    let secondNum = document.getElementById("2nd");
    let secondResult = document.getElementById("2nd-result");
    let result = secondNum.value.length;
    secondResult.textContent = result;
}

function inputSum(){
    let num1 = parseInt(document.getElementById("3rd-1").value);
    let num2 = parseInt(document.getElementById("3rd-2").value);
    let num3 = parseInt(document.getElementById("3rd-3").value);
    let thirdResult = document.getElementById("3rd-result");
    let result = num1+num2+num3;
    
    thirdResult.textContent = result;
}

function inputCompare(){
    let num1 = parseInt(document.getElementById("4th-1").value);
    let num2 = parseInt(document.getElementById("4th-2").value);
    fourthResult = document.getElementById("4th-result");
    let result;
    if(num1 > num2){
        result = num2;
    }else{
        result = num1;
    }
    fourthResult.textContent = result;
}

function inputUpper(){
    let str = document.getElementById("5th").value;
    fifthResult = document.getElementById("5th-result");
    let result = str.toUpperCase();
    fifthResult.textContent = result;
}

function inputSub(){
    let num1 = parseInt(document.getElementById("6th-1").value);
    let num2 = parseInt(document.getElementById("6th-2").value);
    sixthResult = document.getElementById("6th-result");
    let result = num1-num2;
    sixthResult.textContent = result;
}

function inputCheck(){
    let num = parseInt(document.getElementById("7th").value);
    if(num>0){
        alert("양수!!!!");
    }else if(num<0){
        alert("음수!!!!");
    }else{
        alert("0!!!!");
    }
}

function inputSumAlert(){
    let num1 = parseInt(document.getElementById("8th-1").value);
    let num2 = parseInt(document.getElementById("8th-2").value);
    let result = num1+num2
    alert("합은 : "+result);
}

function inputLast(){
    let num1 = parseInt(document.getElementById("9th-1").value);
    let num2 = parseInt(document.getElementById("9th-2").value);
    let num3 = parseInt(document.getElementById("9th-3").value);
    let result = num1;
    let numArray = [num1,num2,num3];
    for(let i=1;i<numArray.length;i++){
        if(result<numArray[i]){
            result = numArray[i];
        }
    }
    alert("제일 큰수는 : "+result);
}

    // if(num1>num2){
    //     result = num1;
    // }else {
    //     result = num2;
    // }
    // if(result <num3){
    //     result = num3;
    // }
        