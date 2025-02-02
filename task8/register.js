"use strict";
let password=document.getElementsByName("password");
let confirmPassword=document.getElementsByName("ConfirmPass");
if(!(password===confirmPassword)){
    document.write("Pls match the pass with confirm");
}

