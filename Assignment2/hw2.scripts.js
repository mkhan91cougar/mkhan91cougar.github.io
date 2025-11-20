 /* 
Name: Muhammad Saim Khan 
Date created: 09/21/2025
Date last modified: 09/23/2025
Version: 1
Description: MIS 3371-Assignment 2
*/

//dyanmic date js code
const d = new Date();
let text = d.toLocaleDateString();
document.getElementById("today") .innerHTML = text;
//update time
function updateTime(){
const now = new Date();
document.getElementById("time") .innerHTML = now.toLocaleTimeString();
}
updateTime();
setInterval(updateTime,1000);
//name slider js code
let slider = document.getElementById("range");
let output = document.getElementById("range-slider");
output.innerHTML = slider.value;
slider.oninput = function(){
output.innerHTML = this.value;
};


function ValidateDOB() {
    DOB= document.getElementById("DOB");
    let date= new Date(DOB.value);
    let maxDOB= new Date();
    maxDOB.setFullYear(new Date().getFullYear()-100);

    if (date>new Date()){
        document.getElementById("DOB-error").innerHTML= "Your Date of Birth can't be in future";
        DOB.value="";
        return false;
    }else if (date < maxDOB) {
        document.getElementById("DOB-error").innerHTML= "Your Date of Birth can't be more than 100 year ago"
        DOB.value="";
        return false;
    } else {
        document.getElementById("DOB-error").innerHTML="";
        return true;
    }

}

function validateSSN() {
const SSN= document.getElementById("SSN").value;
const SSNR= /^[0-9]{3}-?[0-9]{2}-?[0-9]{4}$/;

if (!SSNR.test(SSN)) {
    document.getElementById("SSN-error").innerHTML=
    "Invaild SSN. Enter valid SSN";
    return false;
} else {
document.getElementById("SSN-error").innerHTML="";
return true;
}

}

function ValidateZip() {
    const ZipInput= document.getElementById("Zip");
    let Zipcode= ZipInput.value.replace(/\D/g,"");

    if (!Zipcode) {
        document.getElementById("Zip-error").innerHTML= "Invaild Zip code";
        return false;
    }

    if (Zipcode.length > 5) {
       Zipcode= Zipcode.slice(0,5)+"-"+ Zipcode.slice(5,9);
    }else {
        Zipcode = Zipcode.slice(0,5);
    }
    ZipInput.value = Zipcode;
    document.getElementById("Zip-error").innerHTML = "";
    return true;
}

function validateEM() {
    var email = document.getElementById("EM").value
    var emailR = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var EMnote = document.getElementById("EMnote");
    
    if (!emailR.test(email)){
        EMnote.innerHTML = "Invalid email address. Please enter valid email address.";
        return false;
    } else {
        EMnote.innerHTML="Valid email address.";
        return true;
    }
}

function validateCell() {
    var Cell= document.getElementById("Cell").value.replace(/\D/g,"");
    var note= document.getElementById("cellnote");

    if (Cell ===""){
        note.innerHTML="Please enter your cell phone number.";
        return false;
    }

    if(Cell.length ===10){
        var cellformat= Cell.replace(/(\d{3})(\d{3})(\d{4})/,"$1-$2-$3");
        document.getElementById("Cell").value =cellformat;
        note.innerHTML="Valid cell phone number";
        return true;
    } else {
        note.innerHTML="Please enter your 10 digits cell phone number";
        return false;
    }
}

function validateunid() {
    unid= document.getElementById("unid").value.toLowerCase();
    document.getElementById("unid").value =unid;

    if(unid.length == 0) {
        document.getElementById("unid-error").innerHTML= "User name cannot be blank";
        return false;
    }

    if (!isNaN(unid.charAt(0))) {
        document.getElementById("unid-error").innerHTML="Username cannot begin with numeric digits";
        return false;
    }

    let regex= /^[a-zA-Z0-9_-]+$/;
    if(!regex.test(unid)){
        document.getElementById("unid-error").innerHTML="For username only use letters, numbers, underscores, and dashes";
        return false;
    } else if (unid.length<5){
        document.getElementById("unid-error").innerHTML =
        "Username must contain at least 5 characters";
        return false;
    } else if (unid.length>30){
        document.getElementById("unid-error").innerHTML =
        "Username cannot exceed 30 characters";
        return false;
    } else {
        document.getElementById("unid-error").innerHTML="";
        return true;
    }

} 

function validatepassw() {
    const password= document.getElementById("passw").value;
    const unid= document.getElementById("unid").value.toLowerCase();
    let errorNote = [];

    if(!password.match(/[a-z]/)){
        errorNote.push("Please enter atleast one Lowercase letter");
    }

     if(!password.match(/[A-Z]/)){
        errorNote.push("Please enter atleast one Uppercase letter");
    }

     if(!password.match(/[0-9]/)){
        errorNote.push("Please enter atleast one numeric digit");
    }

     if(!password.match(/[!\@#\$%&*\-_\\.+\(\)]/)){
        errorNote.push("Please enter atleast one special character");
    }

     if(password.includes(unid)){
        errorNote.push("Password can't have username characters");
    }

     if(password.length < 15){
        errorNote.push("Password must be 15 characters long");
    }

    const notefield= document.getElementById("passwMessage");

    if (errorNote.length>0){
        notefield.innerHTML =errorNote.join("<br>");

    } else {
        notefield.innerHTML="Strong Password";
    }
}

function validateRepassw() {
    pass1 = document.getElementById("passw").value;
    pass2 = document.getElementById("Repassw").value;

if (pass1!== pass2) {
document.getElementById("pass2-error").innerHTML= "Password do not match";
return false;
} else {
    document.getElementById("pass2-error").innerHTML= "Passwords match";
    return true;
}
}

function ReviewInput(){
    var form= document.getElementById("CreateAccount");
    let output= "<table><tr><th colspan = '2'> Please review your information before submitting:</th></tr>";

   const fieldNames = {
    Fname: "First Name:",
    Minit: "Middle Initial:",
    Lname: "Last Name:",
    DOB: "Date of Birth:",
    SSN: "Social Security# : ",
    patisex: "Sex:",
    EM: "Email Address:",
    Cell: "Cell Phone Number:",
    address1: "Address Line 1:",
    address2: "Address Line 2:",
    City: "city:",
    State: "State:",
    Zip: "Zip code:",
    notes: "Reason for visit:",
    symptoms: "Symptoms:",
    Med: "Taking Any Medication:",
    range: "Pain Level (1-10):",
    Ins: "Insurance:",
    unid: "Username:",
    passw: "Password:",
    Repassw: "Re-enter your Password:"
   };

    for (let le of form.elements){
    if (["submit", "reset", "button"].includes(le.type)) continue;
    if (le.type === "checkbox" && !le.checked) continue;

    if(le.type === "radio") {
        if(le.checked) {
            let labeltext = fieldNames[le.name] || le.name;
            output += `<tr><td align= 'right'> ${labeltext}</td><td>${le.value}</td></tr>`;
        }
        continue;
    }

    let labeltext=fieldNames[le.name]||le.name;

    if (le.tagName === "SELECT") {
        output += `<tr><td align= 'right'>${labeltext}</td><td>${le.options[le.selectedIndex].text}</td></tr>`;
    } else if (le.value) {
        output += `<tr><td align= 'right'>${labeltext}</td><td>${le.value}</td></tr>`;
    }
    }
    output += "</table>";
    document.getElementById("showinput").innerHTML = output;
 }

 function DeleteReview() {
    document.getElementById("showinput").innerHTML="";
}
