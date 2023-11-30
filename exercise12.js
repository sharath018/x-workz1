getData=() => {
    let name = document.getElementById("name").value;
    let button = document.getElementById("button");

    if (name.length > 3 && name.length <20) {
        document.getElementById("nig").innerHTML ='<b style="color:red">Name is Valid</b>'
        //   console.log("Name is Valid")
        button.removeAttribute("disabled", " ")
    }
    else {
        // console.log("Name is Invalid")
        document.getElementById("nig").innerHTML ='<b style="color:red">Name is Invalid</b>'
        button.setAttribute("disabled", " ")
        
    }
}
/* 
getButton=() => {
    let name = document.getElementById("name").value;
    let button = document.getElementById("button");

    if (name.length < 3 && name.length>20) {
        document.getElementById("nig").innerHTML +='<b>Name is Valid</b>'
        console.log("Name is Invalid")
        button.removeAttribute("disabled", " ")
    }
    else {
        document.getElementById("nig").innerHTML +='<b>Name is Invalid</b>'
            console.log("Name is valid")
            button.setAttribute("disabled", " ")
        
    }
} */