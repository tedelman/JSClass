//Json Declare
var data = {        
    
    "name" : '',
    "email" : '',
    "mousex" : [],
    "mousey" : [],
    "height" : [],
    "width" : [],
    "agent" : '',
    "title" : ''
};
function onMouseMove(e){    
    
    data.mousex.push(e.clientX);
    data.mousey.push(e.clientY);
    
        if ( data.mousex.length > 100 ) {
                document.removeEventListener('mousemove', onMouseMove);
        }
        
}

//Event listener for OnMouseMove function
document.addEventListener('mousemove', onMouseMove);  

//storedData function that stores the name and email on blur
function storedData() {      

    data.name = document.getElementById('fullname').value;
    data.email = document.getElementById('email').value;
}
    var fullName = document.getElementById('fullname');
    var email = document.getElementById('email');
    fullName.addEventListener('blur', storedData);
    email.addEventListener('blur', storedData);

//Function to track mouse where the mouse moves 


//Function to get screen properties
function screenData (){     
    
    data.height = window.innerHeight;
    data.width = window.innerWidth;
    data.agent = window.navigator.userAgent;
    data.title = document.title;
    
}

//Event listener for screenData function
window.addEventListener("load", screenData);            


//function to showResults
function showResults() {                               
    console.clear();
    console.log(data);
}


var result = document.getElementById('showResults');


result.addEventListener("click", showResults);