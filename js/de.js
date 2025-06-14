function grade(){
    const number= document.getElementById("number").value;
    const result= document.getElementById("result");
    if (number === ""){
        alert ("please enter your grade")
    }else if(number == 0){
        let Rsult;
        Rsult.innerText= "your grade is poor"
    }
    result.appendChild(Result)
}