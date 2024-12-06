function Q1(){
    let num = parseInt(document.getElementById("dan").value);
    let result ="";
    for(let i=1; i<=9;i++){
        
        result += num+"*"+i+"="+num*i+"\n";
    }
    alert(result);
}

function Q2(){
    let num = document.getElementById("ran");
        
    
    let bre = true;
    while(bre){
        let result = Math.ceil(Math.random()*100)-1;
        if(result<=20){
            console.log(result);
            num.value = result;
        bre = false;
        }
    }
}

function Q3(){
    let num = document.getElementById("numIsNan").value;
    if(isNaN(num)){
    alert("숫자가 아닙니다.")
    }else{
    alert("숫자입니다")
    }

}

function Q4(){
    let name = document.getElementById("nameChk").value
    // nameset = ["홍길동","이순신","유재석","김선달","강호동"];
    //                                                       .split(" ") => " "를 기준으로 배열 생성
    let nameset= document.getElementById("names").textContent.split(" ");
    let result=0;
    //화살표 함수, 삼항연산자 써보기
    nameset.forEach((set) => {
        if(set===name){
            result++;
        }
    })
    // for(let i=0;i<nameset.length;i++){
    //     // if(nameset[i].includes(name)){
    //     if(nameset[i]===name){
    //         result++;
    //     }
    // }
    if(result===0){
        alert("이름이 없습니다.")
    }else{
        alert("이름이 있습니다.")
    }
}



function Q5(){
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let gender = document.getElementById("gender").value;
    let result = document.getElementById("insert");

    let body = document.createElement("tr");
    let nameEle = document.createElement("td");
    let ageEle = document.createElement("td");
    let genderEle = document.createElement("td");

    nameEle.textContent = name;
    ageEle.textContent = age;
    genderEle.textContent = gender;

    body.appendChild(nameEle);
    body.appendChild(ageEle);
    body.appendChild(genderEle);
    result.appendChild(body);
}

function Q6(){
    const lengBoxes = document.getElementsByName("leng");
    const allChk = document.getElementById("Allchk").checked;
    lengBoxes.forEach((box)=>{
        box.checked = allChk;
    })
}












