function loginCheck(){
    const id = document.getElementById("login-id").value;
    const pwd = document.getElementById("login-password").value;
    const idCheck = "user";
    const pwdCheck = "qwer1234!";
    console.log(!id===idCheck||!pwd===pwdCheck);
    if(id===""||pwd===""){
        alert("아이디 또는 비밀번호를 입력해주세요.")
    } else if(id===idCheck&&pwd===pwdCheck){
        alert("로그인 되었습니다.");
    } else {
        alert("아이디 또는 비밀번호가 틀렸습니다.");
    }

}