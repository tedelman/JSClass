 var element = document.getElementById('fade');
 element.style.opacity = 0;
 
 function fadeIn()
        {
           var opacityValue = parseFloat(element.style.opacity) 
           opacityValue += .01;
           element.style.opacity = opacityValue
        }

function fadeOut()
        {
         
            var opacityValue1 = parseFloat(element.style.opacity)
            if (opacityValue1 < 1){
                fadeIn();
                setTimeout(fadeOut, 100);
               
            }
        }
     fadeOut();
 
 
 
 
 function hideAlert(){
     
     element.style.display = "none";
 }
 window.setTimeout("hideAlert();", 10000)
 
 
 var can = document.getElementById('image');
 var context = can.getContext('2d');
 
//  
 context.beginPath();
 context.rect(550,100,100,100);
 context.lineWidth = "5";
 context.strokeStyle = "red";
 context.stroke();
 
 //adds circle
 context.beginPath();
 context.arc(600,300,50,0,2*Math.PI);
 context.lineWidth ="10";
 context.strokeStyle = "blue";
 context.stroke();

//adds image
var image = new Image();
image.onload = function(){
    context.drawImage(image, 200, 100, 300, 300);
};
image.src = 'http://www.hockeytron.com/Sherwood-NHL-Team-Souvenir-Ice-Hockey-Puck-Philadelphia-Flyers-image.jpg';