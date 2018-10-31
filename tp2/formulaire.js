

function validation(){
    var minlength=5;
    var nom = document.getElementById("nom");
    var prenom = document.getElementById("prenom");
    var date = document.getElementById("date");
    var adresse = document.getElementById("adresse");
    var mail = document.getElementById("mail");

    
    if( nom.value.length >= minlength && prenom.value.length >= minlength 
        && date.value.length >= minlength && adresse.value.length >= minlength && mail.value.length >= minlength){
        
        document.getElementById("resultat").style.display='block'; 
        document.getElementById("resultat").innerHTML = "Bienvenue " + document.querySelector("#nom").value;
        document.getElementById("error").style.display='none';
    }
    else{
        document.getElementById("resultat").style.display='none';
        document.getElementById("error").innerHTML = "Les champs doivent avoir minimum "+minlength+" caractéres";
        document.getElementById("error").style.display='block';
         
 
    }
    
    }
    function hide(){
        
        var nom = document.getElementById("nom");
        var prenom = document.getElementById("prenom");
        var date = document.getElementById("date");
        var adresse = document.getElementById("adresse");
        var mail = document.getElementById("mail");
    
        
        if(nom.value.length == 0 && prenom.value.length == 0 && adresse.value.length == 0 &&
            mail.value.length == 0 ){
                document.getElementById("error").style.display='none';
                document.getElementById("resultat").style.display='none';
            }
        }
    

   
    
  


