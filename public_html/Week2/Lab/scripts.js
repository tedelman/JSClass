
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function submitForm() {
    
    var email = document.getElementById("email");
    var emailErr = document.getElementById("err_email");
    var fullname = document.getElementById("name");
    var fullnameErr = document.getElementById("err_name");
    var comments = document.getElementById("comments");
    var commentsErr = document.getElementById("err_dob");
    
    if ( email.value.length > 0 && email.value.indexOf("@") > 0 && email.value.indexOf(".")){
        email.className = "good";
        emailErr.innerHTML = "Email is valid";
        emailErr.className = "valid";
    } else { 
        email.className = "bad";
        emailErr.innerHTML = "Email is not valid";
        emailErr.classname = "bad";
    }
        
    if ( comments.value.length > 0 && comments.value.length < 150) {
        comments.className = "good";
        commentsErr.innerHTML = "Good!";
        commentsErr.className = "valid";
    } else {
        comments.className = "bad";
        commentsErr.innerHTML = "Too Long or Too short";
        commentsErr.className = "error";
        
    }
    
    if ( fullname.value.length > 0 ) {
        fullname.className = "good";
        fullnameErr.innerHTML = "ok!";
        fullnameErr.className = "valid";
    } else {
        fullname.className = "bad";
        fullnameErr.innerHTML = "Full name is not entered.";
        fullnameErr.classname = "error";
    }
    
    
    }
    
    


