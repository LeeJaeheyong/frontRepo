function addProject(){
    let title = document.getElementById("title").value;
    let detail = document.getElementById("detail").value;

    let addTitle = document.createElement("h3");
    let addDetail = document.createElement("p");
    let addproj = document.getElementById("project");

    addproj.appendChild(addTitle);
    addproj.appendChild(addDetail);
    
    if(title===""){
        alert("제목을 입력해주세요.")
    } else if(detail===""){
        alert("설명을 입력해주세요")
    } else{
        if(title.length<=10){
            addTitle.textContent = title;
            addDetail.textContent = detail;
        }
        else{
            alert("제목이 너무 깁니다.")
        }
    }

}