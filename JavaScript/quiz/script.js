function Q1(){
    let result = document.getElementById("message")
    let pwd = document.getElementById("password").value;
    let pwdPattern = /^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[`!@#$%^&*()_+{}\[\]|:;"'<>,.?/])[0-9A-Za-z`!@#$%^&*()_+{}\[\]|:;"'<>,.?/]{8,}$/
    console.log(pwdPattern.test(pwd))
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(pwd!==""){
                result.style.display= "block"
            if(pwdPattern.test(pwd)){
                resolve("맞았다!")
            } else{
                reject("틀렸다!")
            }
        } else{
            result.style.display= "none"
        }
        },)
    })
}

async function solution() {
    let result = document.getElementById("message")
    try{
        const sol = await Q1();
        result.textContent = sol;
    }
    catch(err){
        result.textContent = err;
    }
}