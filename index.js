button=document.getElementById("b");
 button.setAttribute("disabled"," ")
function getdetails(){
    let fname = document.getElementById("fname").value;
    let lname=document.getElementById("lname").value;
    let email=document.getElementById("email").value;
    let phno=document.getElementById("phno").value;
    let password=document.getElementById("password").value;
    let cpassword=document.getElementById("cpassword").value;
    let q4ualification=document.getElementById("quali").value;
    if(fname=="" || lname=="" || email=="" || phno==""){
        alert("Please fill all the fields");
    }
    else{
      
    }
    button=document.getElementById("b");
   
    if(result1==1 && result2==1 && result3==1 && result4==1 && result5==1 && result6==1 && result7==1 && result8==1)
    { console.log("nextpage")
        button.removeAttribute("disabled"," ")
       window.location.href="./exercise14.html"
    }
    else{
      console.log("not")
        button.setAttribute("disabled"," ")
    }
 
  
   
   
    let obj={
        email: email,
        
        password: password,}
       
 let afterConvertString = JSON.stringify(obj);
        console.log(afterConvertString);
        let save=sessionStorage.setItem("details",afterConvertString);
     
    }

     const d = new Date();
     console.log(d)
     document.getElementById("date").innerHTML=new Date();

     let result1
     input1=()=>{
      let fname = document.getElementById("fname").value;
      
        button=document.getElementById("b");
     
     if(fname.length >  2 && fname.length<15 ){
        result1=1
        document.getElementById("a").innerHTML = ' <b style="color:green; font-size:12px">First Name is Valid<b>'
        console.log("yes")
     }
     else{
        result1=0
        document.getElementById("a").innerHTML = '<b style="color:red; font-size:12px;">Enter Valid First Name<b>'
        console.log("no")
     }
   }

     let result2
     input2=()=>{
      let lname=document.getElementById("lname").value;
        button=document.getElementById("b");
     
     if(lname.length>=0 && lname.length<15){
        result2=1
        document.getElementById("b").innerHTML = ' <b style="color:green; font-size:12px;">Last Name is Valid<b>'
        console.log("yes")
     }
     else{
        result2=0
        document.getElementById("b").innerHTML = '<b style="color:red; font-size:12px;">Enter Valid Last Name<b>'
        console.log("no")
     }
   }
     let result3
     input3=()=>{
      let email=document.getElementById("email").value;
        button=document.getElementById("b");
     
     if(email.length>=11 && email.length<150){
        result3=1
        document.getElementById("c").innerHTML = ' <b style="color:green; font-size:12px;"> E-mail is  Valid<b>'
        console.log("yes")
     }
     else{
        result3=0
        document.getElementById("c").innerHTML = '<b style="color:red; font-size:12px;"> Enter Valid E-mail<b>'
        console.log("no")
     }
   }
     let result4
     input4=()=>{
      let phno=document.getElementById("phno").value;
        button=document.getElementById("b");
     
     if(phno.length==9 ){
        result4=1
        document.getElementById("d").innerHTML = ' <b style="color:green; font-size:12px;"> Phone number is Valid<b>'
        console.log("yes") 
     }
     else{
        result4=0
        document.getElementById("d").innerHTML = '<b style="color:red; font-size:12px;">Enter Valid Phone number<b>'
        console.log("no") 
     }}
     
     let result5

     input5=()=>{
      let q4ualification=document.getElementById("quali").value;
        
        button=document.getElementById("b");
     
     if(q4ualification.length>=1 ){
        result5=1
        document.getElementById("e").innerHTML = ' <b style="color:green; font-size:12px;">Qualification is Valid <b>'
        console.log("yes") 
     }
     else{
        result5=0
        document.getElementById("e").innerHTML = '<b style="color:red; font-size:12px;"> Enter Valid Qualification<b>'
        console.log("no")
     }
   }
     let result6
     input6=()=>{
      let password=document.getElementById("password").value;
        button=document.getElementById("b");
     
     if(password.length>=5 ){
        result6=1
        document.getElementById("f").innerHTML = ' <b style="color:green; font-size:12px;"> Password is Valid<b>'
        console.log("yes") 
     }
     else{
        result6=0
        document.getElementById("f").innerHTML = '<b style="color:red; font-size:12px;"> Enter Valid Password<b>'
        console.log("no")
     }}
     let result7
     input7=()=>{
      let cpassword=document.getElementById("cpassword").value;
      let password=document.getElementById("password").value;
        button=document.getElementById("b");
     
     if(cpassword === password){
        result7=1
        document.getElementById("g").innerHTML = ' <b style="color:green; font-size:12px;"> Password is Valid<b>'
        console.log("yes") 
     }
     else{
        result7=0
        document.getElementById("g").innerHTML = '<b style="color:red; font-size:12px;"> Enter Valid Password<b>'
        console.log("no")
     }
     }

     let result8
dateofbirth = () => {
    let datebirth = document.getElementById("dob").value;
    let button = document.getElementById("b");

    if (datebirth !== " ") {
        result8 = 1
        document.getElementById("i").innerHTML = ' <b style="color:green; font-size:12px;">  DOB is Valid<b>'

        button.removeAttribute("disabled", " ")
    }
    else {
        result8 = 0
        document.getElementById("i").innerHTML = '<b style="color:red; font-size:12px;"> Enter Valid DOB <b>'
        button.setAttribute("disabled", " ")
      
    }
}