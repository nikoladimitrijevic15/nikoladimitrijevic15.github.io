window.onload=function(){
    document.getElementById("firstName").addEventListener("blur",firstName);
    document.getElementById("lastName").addEventListener("blur",lastName);
    document.getElementById("email").addEventListener("blur",Email);
   }
function addError(parent, errorID, message) {
    var errorDIV = document.createElement("div");
        errorDIV.setAttribute('id',errorID);
        errorDIV.setAttribute('class','invalid-feedback')
        errorDIV.innerHTML = message;
        parent.appendChild(errorDIV);
   }
function removeError(errorID) {
    var element = document.getElementById(errorID);
        element.parentNode.removeChild(element);
   }
function firstName(){
    var ime = document.getElementById("firstName").value;
    var pattern = /^[A-ZČĆŽŠĐ][a-zčćžš]{1,11}$/;
    var id= "nameError"
    var element=document.getElementById(id);
   
    if(pattern.test(ime)){
        document.getElementById("firstName").classList.add("is-valid");
        document.getElementById("firstName").classList.remove("is-invalid");
        if(element!=null)  removeError(id);
        return true;
    }
    else{
        document.getElementById("firstName").classList.remove("is-valid");
        document.getElementById("firstName").classList.add("is-invalid");
        parent=document.getElementById("firstName").parentElement;
        if(element==null){
                addError(parent, id, "Please provide a valid first name, must be between 2-12 characters");
            }
        return false;
    }
   }

function lastName(){
    var ime = document.getElementById("lastName").value;
    var pattern = /^[A-ZČĆŽŠĐ][a-zčćžš]{1,11}$/;
    var id= "lastNameError";
    var element=document.getElementById(id);
    if(pattern.test(ime)){
        document.getElementById("lastName").classList.add("is-valid");
        document.getElementById("lastName").classList.remove("is-invalid");
        if(element!=null) removeError(id);
        return true;
    }
    else{
        document.getElementById("lastName").classList.remove("is-valid");
        document.getElementById("lastName").classList.add("is-invalid");
        parent=document.getElementById("lastName").parentElement;
        if(element==null){
            addError(parent, id, "Please provide a valid last name, must be between 2-12 characters")
            }
        return false;
    }
   }
function Email(){
    var email = document.getElementById("email").value;
    var pattern = /^\S+@\S+\.\S+$/;
    var id= "emailError";
    var element=document.getElementById(id);
    if(pattern.test(email)){
        document.getElementById("email").classList.add("is-valid");
        document.getElementById("email").classList.remove("is-invalid");
        if(element!=null) removeError(id);
        return true;  
    }
    else{
        document.getElementById("email").classList.remove("is-valid")
        document.getElementById("email").classList.add("is-invalid")
        parent=document.getElementById("email").parentElement;
        if(element==null){
            addError(parent, id, "Please provide a valid email address, e.g. janedoe@email.com")
            }
        return false;
     }
}
function formCheck(){
     if(Email() && lastName() && firstName()) return true;
     return false;
    }