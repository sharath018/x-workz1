let value1
handleClick=()=>{
    let username=document.getElementById("exampleInputEmail1").value;
    let button=document.getElementById("button");

    if(username.length>3 && username.length<20){
        value1=1
        
        button.removeAttribute("disabled", " ") 
    }
    else{
        value1=0
       
        button.setAttribute("disabled", " ")
    }
}

let value2
handleClick1=()=>{
    let password=document.getElementById("exampleInputPassword1").value;
    let button=document.getElementById("button");
    if(password.length>4 && password.length<20){
        value2=1
        button.removeAttribute("disabled", " ") 
    }
    else{
        value2=0
       
        button.setAttribute("disabled", " ")
    }
}

buttonClick=()=>{
if(value1==1 && value2==1 )
{  
    button.removeAttribute("disabled"," ")
    window.location.href="./project1.html"
}
else{
    button.setAttribute("disabled"," ")
}
}