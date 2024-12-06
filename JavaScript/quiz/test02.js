
function addList(){
let infoTbody = document.getElementById("body");
let infoTr = document.createElement("tr");
let infoDate = document.createElement("td");
let infoAddMoney = document.createElement("td");
let infoAddReason = document.createElement("td");
let infoMinusMomey = document.createElement("td");
let infoMinusReason = document.createElement("td");

infoDate.textContent = "2023-09-23";
infoAddMoney.textContent = "+1,000,000원";
// infoAddMoney.style.color = "red";
infoAddMoney.className = "plus";
infoAddReason.textContent = "월급";
infoMinusMomey.textContent = "-250,000원";
// infoMinusMomey.style.color = "blue";
infoMinusMomey.className = "minus";
infoMinusReason.textContent = "카드값";

infoTr.appendChild(infoDate);
infoTr.appendChild(infoAddMoney);
infoTr.appendChild(infoAddReason);
infoTr.appendChild(infoMinusMomey);
infoTr.appendChild(infoMinusReason);
infoTbody.appendChild(infoTr);
}

function lastMoney(){
    infoTbody = document.getElementById("body");
    infoTrEle = document.createElement("tr");
    infoThEle = document.createElement("th");

    let result = ((infoTbody.childNodes.length-9)/2)*750000+590000+"원";
    infoThEle.textContent = result;
    infoThEle.colSpan = 5;

    infoTrEle.appendChild(infoThEle);
    infoTbody.appendChild(infoTrEle);
}

function remove(){
    let tableTbody = document.getElementById("body");
    let tableTr = document.getElementById("remove-tr");
    tableTbody.removeChild(tableTr);
}