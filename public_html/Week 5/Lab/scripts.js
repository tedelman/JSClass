



function noSpaceAlphaValidate( str ) {
        var alphaRegex = /[a-zA-Z]+/;
        return alphaRegex.test(str);			
}

function SpaceAlphaValidate( str ) {
        var alphaRegex2 = /[a-zA-Z ]+/;
        return alphaRegex2.test(str);			
}


function strip_HTML(str) {
        var findHtml = /<(.|\n)*?>/gi;
        return str.replace(findHtml,"");
}

function emailValidate ( str ) {
         var emailRegex = /(^[a-zA-Z]+[@][a-zA-Z]+[.][a-zA-Z]{3}$)/;
         return emailRegex.test(str);

}

function submitForm() {

        var fname = document.getElementById('fname');
        var lname = document.getElementById('lname');
        var email = document.getElementById('email');
        var comments = document.getElementById('comments');

        if ( !fname.value.length ) {
                console.log("Fname needs a length");
                err_fname.innerHTML = "First Name is blank";
                fname.className = "bad";
        } else if ( noSpaceAlphaValidate( fname.value ) === false ) {
                console.log("Fname needs Alpha chars");
                err_fname.innerHTML = "First Name needs characters";
                fname.className = "bad";
        } else {
                console.log("Fname is good");
                err_fname.innerHTNML = "";
                fname.className = "good";
        }
        
        if ( !lname.value.length ) {
                console.log("LName needs a length");
                err_lname.innerHTML = "Last Name is blank";
                lname.className = "bad";
        } else if ( noSpaceAlphaValidate ( lname.value ) === false ) {
                console.log("Lname needs Alpha Chars");
                err_lname.innerHTML = "Last Name needs characters";
                lname.className = "bad";
        } else {
                console.log("Lname is good");
                err_lname.innerHTML = "";
                lname.className = "good";
        }
        
        if ( !email.value.length ) {
                console.log("Email needs a length");
                err_email.innerHTML = "Email is blank";
                email.className = "bad";
        } else if ( emailValidate( email.value ) === false ) {
                console.log("Email needs Alpha Chars");
                err_email.innerHTML = "email needs characters";
                email.className = "bad";
        } else {
                console.log("email is good");
                err_email.innerHTML = "";
                email.className = "good";
        }
        
        if ( !comments.value.length > 0 && !comments.value.length < 150) {
                console.log("Comments needs a length");
                err_comments.innerHTML = "Good!";
                comments.className = "good";
        } else {
                console.log("Comments are NOT Good");
                err_comments.innerHTML = "Too Long or Too short";
                comments.className = "error";
       }
    }