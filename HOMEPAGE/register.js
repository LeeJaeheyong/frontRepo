function registerName(){
    let name = document.getElementById("register-name").value;
    let msg = document.getElementById("name-msg");
    let namePattern = /[가-힣]{2,}$/
    if(name===""){
        msg.textContent = "";
    }else if(namePattern.test(name)){
        msg.textContent="";
    }
    else{
        msg.textContent = "한글만 사용 가능합니다.";
        msg.style.color = "red";
    }
}
function registerId(){
    let id = document.getElementById("register-id").value;
    let msg = document.getElementById("id-msg");
    let idPattern = /^[a-z0-9_-]{5,20}$/
    if(id===""){
        msg.textContent = "";
    }else if(idPattern.test(id)){
        msg.textContent = "사용가능한 아이디입니다";
        msg.style.color = "green";
    }
    else{
        msg.textContent = "사용 불가능한 아이디입니다.";
        msg.style.color = "red";
    }
}

function registerPassword(){
    let pwd=document.getElementById("register-password").value;
    let check = document.getElementById("register-check").value;
    let msg = document.getElementById("password-msg");
    let passwordPattern = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,16}$/
    let checkMsg = document.getElementById("check-msg");
    let btn = document.getElementById("register-btn");

    if(pwd===""){
        msg.textContent = "";
    }else {
        if(passwordPattern.test(pwd)){
            msg.textContent = "사용가능한 비밀번호입니다";
            msg.style.color = "green";
            if(pwd===check){
                checkMsg.textContent = "비밀번호가 일치합니다.";
                checkMsg.style.color = "green";
                btn.removeAttribute("disabled");
            }
            else{
                checkMsg.textContent = "비밀번호가 일치하지 않습니다.";
                checkMsg.style.color = "red";
            }
        }
        else{
            msg.textContent = "사용 불가능한 비밀번호입니다.";
            msg.style.color = "red";
        }
        
        
    }
}



function registerBtn(){
    let nameChk = document.getElementById("register-name").value;
    let idChk = document.getElementById("register-id").value;
    let passwordChk = document.getElementById("register-password").value;
    let pwdChk = document.getElementById("register-check").value;
    console.log(pwdChk===passwordChk);
    if(nameChk===""){
        alert("이름을 입력해주세요.")
    }else if(idChk===""){
        alert("아이디를 입력해주세요.")
    }else if(passwordChk===""){
        alert("비밀번호를 입력해주세요")
    }else if(pwdChk===passwordChk){
    }
    else{
        alert("비밀번호가 일치하지 않습니다")
        
    }
}