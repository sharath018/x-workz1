canonEvent=()=>{
    let fname=document.getElementById("name1").value
    let mname=document.getElementById("name2").value
    let lname=document.getElementById("name3").value
    let rel=document.getElementById("rel").value
    let full=document.getElementById("full").value
    let dob=document.getElementById("dob").value
    let age=document.getElementById("age").value
    let pob=document.getElementById("pob").value
    let count=document.getElementById("count").value
    let qual=document.getElementById("qual").value
    let blood=document.getElementById("blood").value
    let land=document.getElementById("land").value
    let email=document.getElementById("email").value
    let phn=document.getElementById("phn").value
    let emn=document.getElementById("emn").value

    let obj = {FirstName:fname,MiddleName:mname,LastName:lname,Relationship:rel,FullName:full,DateOfBirth:dob,Age:age,PlaceOfBirth:pob,Country:count,Qualification:qual,BloodGroup:blood,LandLineNo:land,EmailID:email,PhoneNum:phn,EmergencyNum:emn}
    
    let string = JSON.stringify(obj)
    console.log(string)

    let pushData=localStorage.setItem("ApplicantDetails",string)

    let getData=localStorage.getItem("ApplicantDetails")

    let returnObject=JSON.parse(getData)
    console.log(returnObject.FirstName)
    console.log(returnObject.MiddleName)
    console.log(returnObject.LastName)
    console.log(returnObject.Relationship)
    console.log(returnObject.FullName)
    console.log(returnObject.DateOfBirth)
    console.log(returnObject.Age)
    console.log(returnObject.PlaceOfBirth)
    console.log(returnObject.Country)
    console.log(returnObject.Qualification)
    console.log(returnObject.BloodGroup)
    console.log(returnObject.LandLineNo)
    console.log(returnObject.EmailID)
    console.log(returnObject.PhoneNum)
    console.log(returnObject.EmergencyNum)




}