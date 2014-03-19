


//function to check for no space
function noSpaceAlphaValidate( str ) {
        var alphaRegex = /[a-zA-Z]+/;
        return alphaRegex.test(str);			
}

//function to check for space
function SpaceAlphaValidate( str ) {
        var alphaRegex2 = /[a-zA-Z ]+/;
        return alphaRegex2.test(str);			
}

//function to strip HTML
function strip_HTML(str) {
        var findHtml = /<(.|\n)*?>/gi;
        return str.replace(findHtml,"");
}

//function Email Validation 
function emailValidate ( str ) {
         var emailRegex = /(^[a-zA-Z]+[@][a-zA-Z]+[.][a-zA-Z]{3}$)/;
         return emailRegex.test(str);

}

//function for Form 
function submitForm() {
        
        //Variables
        var fname = document.getElementById('fname');
        var lname = document.getElementById('lname');
        var email = document.getElementById('email');
        var comments = document.getElementById('comments');

        //if statement for first name
        if ( !fname.value.length ) {
                err_fname.innerHTML = "First Name is blank";
                fname.className = "bad";
        } else if ( noSpaceAlphaValidate( fname.value ) === false ) {
                err_fname.innerHTML = "First Name needs characters";
                fname.className = "bad";
        } else {
                err_fname.innerHTNML = "";
                fname.className = "good";
        }
        
        //if statment for last name 
        if ( !lname.value.length ) {
                err_lname.innerHTML = "Last Name is blank";
                lname.className = "bad";
        } else if ( noSpaceAlphaValidate ( lname.value ) === false ) {
                err_lname.innerHTML = "Last Name needs characters";
                lname.className = "bad";
        } else {
                err_lname.innerHTML = "";
                lname.className = "good";
        }
        
        //if statement for email 
        if ( !email.value.length ) {
                err_email.innerHTML = "Email is blank";
                email.className = "bad";
        } else if ( emailValidate( email.value ) === false ) {
                err_email.innerHTML = "email needs characters";
                email.className = "bad";
        } else {
                err_email.innerHTML = "";
                email.className = "good";
        }
        
        //if statement for comments
        if ( !comments.value.length > 0 && !comments.value.length < 150) {
                err_comments.innerHTML = "Not Good!";
                comments.className = "bad";
        } else {
                err_comments.innerHTML = "";
                comments.className = "good";
       }
    }