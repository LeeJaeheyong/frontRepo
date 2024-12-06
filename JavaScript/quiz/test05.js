function inputWelcome(){
    let name = document.getElementById("1st").value;
    alert(name+"님 환영합니다!");
}

function gugudan(){
    let num = parseInt(document.getElementById("input-gugudan").value);
    let secondDiv = document.getElementById("gugudan");
    let result=0;
    console.log(num);

    for(let i =1;i<=9;i++){
        result += num*i;
    }
    secondDiv.innerHTML = result;

}

function welcome(){
    let name = document.getElementById("q3-name").value;
    let age = parseInt(document.getElementById("q3-age").value);
    let result = document.getElementById("welcome");
    if(isNaN(age)===false){
        if(age<18){
            result.innerHTML = name+"님 안녕하세요! 미성년자 분이시군요";
        } else {
            result.innerHTML = name+"님 안녕하세요! 성인이시군요!"; 
        }
    } else{
        result.innerHTML = "나이를 유효한 숫자로 입력하세요";
    }
}

function numCheck(){
    let num = parseInt(document.getElementById("q4-input").value);
    let result = document.getElementById("number");
    if(num%2===0){
        result.textContent = "입력한 숫자는 짝수입니다"
        result.style.color = "blue";
    } else {
        result.textContent = "입력한 숫자는 홀수입니다"
        result.style.color = "red";
    }
}

function lastCheck(){
    let str = document.getElementById("q5-input").value.split();
    let array;
    let resultLength = document.getElementById("str-length");
    let resultReverse = document.getElementById("str-revers");
   
    let leng = str.length;
    let reverse = str.
    console.log(reverse);
    resultLength.textContent = leng;
    resultReverse.textContent = reverse;
}