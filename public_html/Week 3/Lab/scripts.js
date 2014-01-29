//Math.floor is a math function to round down to nearest interger
            
    function RandomAdvertisements (){
                    
//This is my arrary and my 5 Json Objects
    var Advertisements = [];
            
            Advertisements.push({ "title" : 'Football', "description" : 'Touchdown'});
            Advertisements.push({ "title" : 'Soccer', "description" : 'Diving Header'});
            Advertisements.push({ "title" : 'Hockey', "description" : 'Drop the Gloves'});
            Advertisements.push({ "title" : 'Baseball', "description" : 'Strikeout'});
            Advertisements.push({ "title" : 'Basketball', "description" : '3 Pointer'});
        
// Made new var and set equal to a random ad from first funtion
            
            var RandomAdvertisements = RandomNumber(Advertisements.length);
            console.log(RandomAdvertisements ); 
//Console check to make sure it is working properly.  not needed 
            
            var DisplayAdvertisements = document.getElementById("ad"); 
//This takes the Title and Changes it to display a Radom Advertisement
            
            DisplayAdvertisements.innerHTML = Advertisements[RandomAdvertisements ]["title"] + " " + Advertisements[RandomAdvertisements ]["description"]; 
            
            document.title = Advertisements[RandomAdvertisements ]["description"].substr(0,10) + "..."; 
//This display the title using the first 10 letters of my advertisment

            }
            
// This function will take the maximum number from the index Value
    function RandomNumber( max ){
                return (Math.floor( Math.random()*max));
            }
            
// This will mall my             
            RandomAdvertisements();
            