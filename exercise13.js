let result
getfname=() => {
    let firstname = document.getElementById("fname").value;
    let button = document.getElementById("button");

    if (firstname.length > 3 && firstname.length <20) {result=1
        document.getElementById("vvv").innerHTML ='<b style="color:green">*fname is Valid</b>'
        
        button.removeAttribute("disabled", " ")
    }
    else {
       result=0
        document.getElementById("vvv").innerHTML ='<b style="color:red">*fname is Invalid</b>'
        button.setAttribute("disabled", " ")
        
    }
    
}
let result1
getmname=() => {
    let middlename = document.getElementById("mname").value;
    let button = document.getElementById("button");

    if (middlename.length >= 1 && middlename.length <20) {result1=1
        document.getElementById("mm").innerHTML ='<b style="color:green">*mname is Valid</b>'
        
        button.removeAttribute("disabled", " ")
    }
    else {result1=0
       
        document.getElementById("mm").innerHTML ='<b style="color:red">*mname is Invalid</b>'
        button.setAttribute("disabled", " ") 
    } 
}
let result2
getlname=() => {
    let lastname = document.getElementById("lname").value;
    let button = document.getElementById("button");
    if (lastname.length >= 1 && lastname.length <20) {result2=1
        document.getElementById("ll").innerHTML ='<b style="color:green">*lname is Valid</b>'  
        button.removeAttribute("disabled", " ")
    }
    else {    result2=0  
        document.getElementById("ll").innerHTML ='<b style="color:red">*lname is Invalid</b>'
        button.setAttribute("disabled", " ")   
    } 
}
let result3
getoption=() => {
    let relationtype = document.getElementById("relationtype").value;
    let button = document.getElementById("button");
    if (relationtype!==" ") {result3=1
        document.getElementById("option").innerHTML ='<b style="color:green">*option is Valid</b>'  
        button.removeAttribute("disabled", " ")
    }
    else {    result3=0  
        document.getElementById("option").innerHTML ='<b style="color:red">*option is Invalid</b>'
        button.setAttribute("disabled", " ")   
    } 
}
let result4
getrfname=() => {
    let rfname = document.getElementById("rfname").value;
    let button = document.getElementById("button");
    if (rfname.length > 3 && rfname.length <20) {result4=1
        document.getElementById("rf").innerHTML ='<b style="color:green">*rfname is Valid</b>'  
        button.removeAttribute("disabled", " ")
    }
    else {   result4=0   
        document.getElementById("rf").innerHTML ='<b style="color:red">*rfname is Invalid</b>'
        button.setAttribute("disabled", " ")   
    } 
}
let result5
getrmname=() => {
    let rmname = document.getElementById("rmname").value;
    let button = document.getElementById("button");
    if (rmname.length >= 1 && rmname.length <20) {result5=1
        document.getElementById("rm").innerHTML ='<b style="color:green">*rmname is Valid</b>'  
        button.removeAttribute("disabled", " ")
    }
    else {  result5=0    
        document.getElementById("rm").innerHTML ='<b style="color:red">*rmname is Invalid</b>'
        button.setAttribute("disabled", " ")   
    } 
}
let result6
getrlname=() => {
    let rlname = document.getElementById("rlname").value;
    let button = document.getElementById("button");
    if (rlname.length >= 1 && rlname.length <20) {result6=1
        document.getElementById("rl").innerHTML ='<b style="color:green">*rlname is Valid</b>'  
        button.removeAttribute("disabled", " ")
    }
    else {  result6=0    
        document.getElementById("rl").innerHTML ='<b style="color:red">*rlname is Invalid</b>'
        button.setAttribute("disabled", " ")   
    } 
}
let result7
getfullname=() => {
    let fullname = document.getElementById("fullname").value;
    let button = document.getElementById("button");
    if (fullname.length >= 1 && fullname.length <20) {result7=1
        document.getElementById("full").innerHTML ='<b style="color:green">*fullname is Valid</b>'  
        button.removeAttribute("disabled", " ")
    }
    else {      result7=0
        document.getElementById("full").innerHTML ='<b style="color:red">*fullname is Invalid</b>'
        button.setAttribute("disabled", " ")   
    } 
}
let result8
getdob=() => {
    let dob = document.getElementById("dob").value;
    let button = document.getElementById("button");
    if (dob!==" ") {result8=1
        document.getElementById("DOB").innerHTML ='<b style="color:green">*date of birth is Valid</b>'  
        button.removeAttribute("disabled", " ")
    }
    else {     result8=0 
        document.getElementById("DOB").innerHTML ='<b style="color:red">*date of birth is Invalid</b>'
        button.setAttribute("disabled", " ")   
    } 
}
let result9
getage=() => {
    let age = document.getElementById("age").value;
    let button = document.getElementById("button");
    if (age >= 1 && age <100) {result9=1
        document.getElementById("aa").innerHTML ='<b style="color:green">*age is Valid</b>'  
        button.removeAttribute("disabled", " ")
    }
    else {     result9=0 
        document.getElementById("aa").innerHTML ='<b style="color:red">*age is Invalid</b>'
        button.setAttribute("disabled", " ")   
    } 
}
let result10
getpob=() => {
    let pob = document.getElementById("pob").value;
    let button = document.getElementById("button");
    if (pob.length >= 3 && pob.length <20) {result10=1
        document.getElementById("pp").innerHTML ='<b style="color:green">*pob is Valid</b>'  
        button.removeAttribute("disabled", " ")
    }
    else {   result10=0   
        document.getElementById("pp").innerHTML ='<b style="color:red">*pob is Invalid</b>'
        button.setAttribute("disabled", " ")   
    } 
}
let result11
getcob=() => {
    let cob = document.getElementById("cob").value;
    let button = document.getElementById("button");
    if (cob!==" ") {result11=1
        document.getElementById("cc").innerHTML ='<b style="color:green">*cob is Valid</b>'  
        button.removeAttribute("disabled", " ")
    }
    else {   result11=0   
        document.getElementById("cc").innerHTML ='<b style="color:red">*cob is Invalid</b>'
        button.setAttribute("disabled", " ")   
    } 
}
let result12
getqua=() => {
    let qualification = document.getElementById("qualification").value;
    let button = document.getElementById("button");
    if (qualification!==" ") {result12=1
        document.getElementById("qq").innerHTML ='<b style="color:green">*qualification is Valid</b>'  
        button.removeAttribute("disabled", " ")
    }
    else {      result12=0
        document.getElementById("qq").innerHTML ='<b style="color:red">*qualification is Invalid</b>'
        button.setAttribute("disabled", " ")   
    } 
}
let result13
getbg=() => {
    let bg = document.getElementById("bg").value;
    let button = document.getElementById("button");
    if (bg!==" ") {result13=1
        document.getElementById("bb").innerHTML ='<b style="color:green">*blood group is Valid</b>'  
        button.removeAttribute("disabled", " ")
    }
    else {      result13=0
        document.getElementById("bb").innerHTML ='<b style="color:red">*blood group is Invalid</b>'
        button.setAttribute("disabled", " ")   
    } 
}
let result14
getln=() => {
    let lno = document.getElementById("lno").value;
    let button = document.getElementById("button");
    if (lno.length >=1 && lno.length <10) {result14=1
        document.getElementById("ln").innerHTML ='<b style="color:green">* Valid</b>'  
        button.removeAttribute("disabled", " ")
    }
    else {      result14=0
        document.getElementById("ln").innerHTML ='<b style="color:red">*Invalid</b>'
        button.setAttribute("disabled", " ")   
    } 
}
let result15
getam=() => {
    let appno1 = document.getElementById("appno").value;
    let button = document.getElementById("button");
    if (appno1.length==10) {result15=1
        document.getElementById("aaa").innerHTML ='<b style="color:green">* Valid</b>'  
        button.removeAttribute("disabled", " ")
    }
    else {     result15=0 
        document.getElementById("aaa").innerHTML ='<b style="color:red">*Invalid</b>'
        button.setAttribute("disabled", " ")   
    } 
}
let result16
getem=() => {
    let eno = document.getElementById("eno").value;
    let button = document.getElementById("button");
    if (eno.length==10) {result16=1
        document.getElementById("ee").innerHTML ='<b style="color:green">* Valid</b>'  
        button.removeAttribute("disabled", " ")
    }
    else {    result16=0  
        document.getElementById("ee").innerHTML ='<b style="color:red">*Invalid</b>'
        button.setAttribute("disabled", " ")   
    } 
}
let result17
getid1=() => {
    let identification1 = document.getElementById("identification1").value;
    let button = document.getElementById("button");
    if (identification1.length >3 && identification1.length <20) {result17=1
        document.getElementById("id1").innerHTML ='<b style="color:green">* Valid</b>'  
        button.removeAttribute("disabled", " ")
    }
    else {    result17=0  
        document.getElementById("id1").innerHTML ='<b style="color:red">*Invalid</b>'
        button.setAttribute("disabled", " ")   
    } 
}
let result18
getid2=() => {
    let identification2 = document.getElementById("identification2").value;
    let button = document.getElementById("button");
    if (identification2.length >3 && identification2.length <20) {result18=1
        document.getElementById("id2").innerHTML ='<b style="color:green">* Valid</b>'  
        button.removeAttribute("disabled", " ")
    }
    else {   result18=0   
        document.getElementById("id2").innerHTML ='<b style="color:red">*Invalid</b>'
        button.setAttribute("disabled", " ")   
    } 
}
let result19
getemail=() => {
    let email = document.getElementById("email").value;
    let button = document.getElementById("button");
    if (email.length!=" ") {result19=1
        document.getElementById("emm").innerHTML ='<b style="color:green">* Valid</b>'  
        button.removeAttribute("disabled", " ")
    }
    else {   result19=0   
        document.getElementById("emm").innerHTML ='<b style="color:red">*Invalid</b>'
        button.setAttribute("disabled", " ")   
    } 
}
callresult = () => {
    if (result == 1 && result1 == 1 && result2 == 1 && result3 == 1 && result4 == 1 && result5 == 1 && result6 == 1 &&
         result7 == 1 && result8 == 1 && result9 == 1 && result10 == 1 && result11 == 1 && result12 == 1 && result13 == 1 &&
          result14 == 1 && result15 == 1 && result16 == 1 && result17 == 1 && result18 == 1 && result19 == 1 )
          {
            button.removeAttribute("disabled"," ")
            window.location.href="./sampl.html"
          }
   
else{
    button.setAttribute("disabled"," ")
}
}