//Variables to get elements
var divObject = document.getElementById('agreeScroll');
var agree = document.getElementById('agree');
var notagree = document.getElementById('notagree');
var submitButton = document.getElementById('submitAgreement');

//declare variable got scroll
var scroll = false;
//event listener for scroll
divObject.addEventListener('scroll', Scroll);
function Scroll()
{
    if (divObject.scrollTop === (divObject.scrollHeight - divObject.offsetHeight))
    {
        scroll = true;
        
        if (agreeLink1 === true && agreeLink2 === true)
        {
            agree.disabled=false;
            notagree.disabled=false;
            agree.addEventListener('click', radioSelected);
            notagree.addEventListener('click', radioSelected);
        }
    }
}

//declare variable got agreeLink1
var agreeLink1 = false;
//event listener for agreeLink1
document.getElementById('agreeLink1').addEventListener('click', Click1);
//function to check if agreeLink1 is clicked
function Click1()
{
    agreeLink1= true;
    
    if (scroll === true && agreeLink2 === true)
    {
        agree.disabled=false;
        notagree.disabled=false;
        agree.addEventListener('click', radioSelected);
        notagree.addEventListener('click', radioSelected);
    }
}

//declare variable got agreeLink2
var agreeLink2 = false;
//event listener for agreeLink2
document.getElementById('agreeLink2').addEventListener('click', Click2);
function Click2()
{
   agreeLink2 = true;
   
    if (scroll === true && agreeLink1 === true)
    {
        agree.disabled=false;
        notagree.disabled=false;
        agree.addEventListener('click', radioSelected);
        notagree.addEventListener('click', radioSelected);
    }
}



//event listener for submitButton
submitButton.addEventListener('click', ButtonClick);
function ButtonClick()
{
    //documents read error?
    if (!agreeLink1 || !agreeLink2)
    {
        if (docMessageShown === false) 
        {
            docMessageShown = true;
        }
    }
    
   

    //Checks to make sure each document is clicked and scrolled to the bottom
    if (agreeLink1 && agreeLink2 && scroll)
    {
      
        //When agree is checked
        if (agree.checked)
        {
            document.getElementById('h1').style.visibility="hidden";
            document.getElementById('section1').style.visibility="hidden";
            document.getElementById('section2').innerHTML = 'You have passed!';
            document.getElementById('section2').style.textAlign="center";
        }
        
        //When disagree is checked
        else if (notagree.checked)
        {
            document.getElementById('h1').style.visibility="hidden";
            document.getElementById('section1').style.visibility="hidden";
            document.getElementById('section2').innerHTML = 'AGREE NEXT TIME';
            document.getElementById('section2').style.textAlign="center";
        }
    }
    
    } 
