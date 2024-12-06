function send(){
    let name = document.getElementById("content-name").value;
    let email = document.getElementById("content-email").value;
    let message = document.getElementById("content-message").value;
    let namePattern = /[가-힣]$/
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    
    if(name===""){
        alert("이름을 입력해주세요.")
    } else if(!namePattern.test(name)){
        alert("이름은 한글만 사용 가능합니다.")
    } else if(email===""){
        alert("이메일을 입력해주세요.")
    } else if(!emailPattern.test(email)){
        alert("이메일 양식이 유효하지 않습니다.");
    } else if(message===""){
        alert("메세지를 입력해주세요.")
    }
}
function count(){
    let count = document.getElementById("message-count");
    let message = document.getElementById("content-message").value;
    let result = message.slice(0,500);
    count.textContent = result.length+"/500";
}

