/* 
Name: Muhammad Saim Khan 
Date created: 09/21/2025
Date last modified: 09/23/2025
Version: 1
Description: MIS 3371-Assignment 1
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

async function loadStates() {
    try {
        const reply = await fetch("states.json");
        const data = await reply.json();

        const SelectState = document.getElementById("State");
        SelectState.innerHTML = state.substring(0, 2).toUpperCase();
        option.textContent = state;
        SelectState.appendChild(option);
    });

} catch (error) {
    console.log("Error: State list", error);
}

}

document.addEventListerner("DOMContentLoaded", loadStates);
    



function validateDOB() {
    DOB= document.getElementById("DOB");
    let date= new Date(DOB.value);
    let maxDOB= new Date();
    maxDOB.setFullYear(new Date().getFullYear()-120);

    if (date>new Date()){
        document.getElementById("DOB-error").innerHTML= "Your Date of Birth can't be in future";
        DOB.value="";
        return false;
    }else if (date < maxDOB) {
        document.getElementById("DOB-error").innerHTML= "Your Date of Birth can't be more than 120 year ago"
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

function validateZip() {
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
        EMnote.innerHTML= "";
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
        note.innerHTML= "";
        return true;
    } else {
        note.innerHTML="Please enter your 10 digits cell phone number";
        return false;
    }
}

function validateaddress1() {
    let a1 = document.getElementById("address1").value.trim();
    if (a1.length === 0) {
        document.getElementById("address1-error").innerHTML=
        "Address 1 is required.";
        return false;
    } 
    if(a1.length < 2){
        document.getElementById("address1-error").innerHTML="Must be at least 2 character";
        return false;
    }
    document.getElementById("address1-error").innerHTML="";
    return true;
}

function validateaddress2() {
    let a2 = document.getElementById("address2").value.trim();
    if (a2 === "") {
        document.getElementById("address2-error").innerHTML= "";
        return true;
    } 
    if (a2.length < 2) {
        document.getElementById("address2-error").innerHTML="Address line 2 must be at least 2 characters";
        return false;
    }
    document.getElementById("address2-error").innerHTML = "";
    return true;
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
    return errorNote.length === 0;
}

function validateRepassw() {
    pass1 = document.getElementById("passw").value;
    pass2 = document.getElementById("Repassw").value;

if (pass1!== pass2) {
document.getElementById("Repassw-error").innerHTML= "Password do not match";
return false;
} else {
    document.getElementById("Repassw-error").innerHTML= "Passwords match";
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
    Repassw: "Re-entered password:"
   };

   const hiddenFields = ["SSN", "passw", "Repassw"];

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

function displayWarning() {
    var warningMessage = document.getElementById("warning-message");
    var closeWarning = document.getElementById("warning-close");

    warningMessage.style.display = "block";
    closeWarning.onclick = function() {
warningMessage.style.display = "none";
    };
}

function validationeverything() {
    let valid = true;

if(!validateFname()){
    valid =false;
}

if(!validateMinit()){
    valid =false;
}

if(!validateLname()){
    valid =false;
}

if(!validateDOB()){
    valid =false;
}

if(!validateSSN()){
    valid =false;
}

if(!validateEM()){
    valid =false;
}

if(!validateCell()){
    valid =false;
}

if(!validateaddress1()){
    valid =false;
}

if(!validateCity()){
    valid =false;
}

if(!validateZip()){
    valid =false;
}

if(!validateunid()){
    valid =false;
}

if(!validatepassw()){
    valid =false;
}

if(!validateRepassw()){
    valid =false;
}

if(valid) {
document.getElementById("submit").disabled = false;
return true;
} else {
  displayWarning ();
  return false;
}
}

function validateCity() {
    city= document.getElementById("City").value.trim();
    if(!city){
        document.getElementById("city-error").innerHTML="This field cannot be empty";
        return false;
    } else {
        document.getElementById("city-error").innerHTML = "";
        return true;
    }
}

function validateFname() {
    fname= document.getElementById("Fname").value.trim();
    var nameGrid = /^[a-zA-Z'-]+$/;
    if (fname=="") {
        document.getElementById("Fname-error").innerHTML = "This field cannot be empty"
        return false;
    }else if (fname !=""){
        if (!fname.match(nameGrid)) {
         document.getElementById("Fname-error").innerHTML = "Letters, apostrophes, and dashes only.";
        return false;   
        } else if(fname.length <2){
            document.getElementById("Fname-error").innerHTML = "Firstname cannot be less than 2 character.";
        return false;
        }else if (fname.length >30) {
            document.getElementById("Fname-error").innerHTML = "Firstname cannot be morn than 30 character."
        return false;
        } else {
            document.getElementById("Fname-error").innerHTML = "";
            return true;
        }
    }
}

function validateMinit() {
     let mini = document.getElementById("Minit").value.trim().toUpperCase();
     document.getElementById('Minit').value=mini;
     if (mini.length === 0){
        document.getElementById("Minit-error").innerHTML = "";
        return true;
     }
    var nameGrid = /^[A-Z]+$/;

    if(!/^[A-Z]+$/.test(mini)) {
        document.getElementById("Minit-error").innerHTML = "Enter only single uppercase letter";
        return false;
    } 
        document.getElementById("Minit-error").innerHTML = "";
        return true;
    }


function validateLname() {
    lname= document.getElementById("Lname").value.trim();
    var nameGrid = /^[a-zA-Z'-]+$/;
    if (lname=="") {
        document.getElementById("Lname-error").innerHTML = "This field cannot be empty"
        return false;
    }else if (lname !=""){
        if (!lname.match(nameGrid)) {
         document.getElementById("Lname-error").innerHTML = "Letters, apostrophes, and dashes only.";
        return false;   
        } else if(lname.length <2){
            document.getElementById("Lname-error").innerHTML = "Lastname cannot be less than 2 character.";
        return false;
        }else if (lname.length >30) {
            document.getElementById("Lname-error").innerHTML = "Lastname cannot be morn than 30 character."
        return false;
        } else {
            document.getElementById("Lname-error").innerHTML = "";
            return true;
        }
    }
}

const localFields = {
    "Fname", "Minit", "Lname", "DOB", "EM", "Cell", "address1", "address2", "City", "Zip", "notes", "range", 
    "unid"
];

localFields.fillin(id => {
    let el = document.get.ElementById(id);
    if (el) {
        el.addEventListener("input", () => {
            localStorage.setItem(id, el.value);
        });
    }
});

document.addEventListener("DOMContentLoaded", () => {
    localFields.fillin(id => {
        let saved = localStorage.getItem(id);
        if(saved !== null) {
            let el = document.getElementById(id);
            if (el) el.value = saved;
        }
    });
});

const IsFields 
function setupCookies(name, cvalue, expireDate) {
    var day = new Date();
    day.setTime(day.getTime()+(expireDate * 24 * 60 * 60 1000));
    var outdated = "expires="+ day.toUTCString();
    document.cookie = name + "=" cvalue + ";" + expires + ";path=/";
}

function bringCookie(name) {
    var cookieName = name + "=";
    var cookies = document.cookie.split(';');
    
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].trim();
        if (cookie.indexof(cookieName) === 0) {
            return cookie.substring(cookieName.length, cookie.length);
        }
    }
    return "";
}

inputs.fillin(function (input) {
    var inputElement = document.getElementById(input.id)

    var cookieVariable = getCookie(input.cookieName);
    if(cookieVariable !== "") {
        inputElement.value = cookieValue;
    }

    inputElement.addEventListener("input", function () {
        setupCookie(input.cookieName, inputElement.value, 30);
    });
});

var firstName = bringCookie("firstName");
if(firstName !== "") {
    document.getElementId("welcomeA").innerHTML = "Nice to see you again," + firstName + "!<br>";
    document.getElementById("welcomeB").innerHTML = "<a href='#' id='new-patient>Not" + firstName +
        "? To register for new patient click here.</a>";
    document.getElementById("new-patient").addEventListener("Click here", function () {
        inputs.fillin(function (input) {
            setupCookie(input.cookieName, "", -1);
        });
    }

    document.getElementById("save my info").addEventListener("change", function() {
        const saveInfo = this.checked;
        if(!saveInf0){
            deleteAllCookies();
        console.log("All of your cookies deleted due to 'save my info' is unchecked.");
        } else {
            inputs.fillin(function (input) {
                const inputElement= document.getElementById(input.id);
                if(inputElement.value.trim() !== "") {
                    setupCookie(input.cookieName, inputElement.value, 30);
                }
            });
            console.log("Cookies still saved due to 'save my info' is checked.");
        }
    });

    function deleteAllCookies() {
        document.cookie.split(";").fillin(function (cookie) {
            let cookieIn = cookie.indexOf("=");
            let name = cookieIn > -1 ? cookie.substr(0, cookieIn): cookie;
            document.cookie = name + "=;expires=Tue, 10 jan 1970 00:00:00 UTC;path=/;";
        });
    }
    document.addEventListener("DOMContentLoaded", function() {
        const saveInfo = document.getElementById("save my info").checked;
        if(!saveInfo){
            deleteAllCookies();
        }
    });
    
                                                            





