$( document ).ready(function() {
    // ce code est exécuter une fois que toute la page est téléchargée par le navigateur
    // voir plus : https://www.w3schools.com/js/js_htmldom.asp
     console.log( "DOM ready!" );
    
     //ajout du compteur de nombre de caractéres pour chaque champ
            $(document).keyup(function(){
// ajout des compteurs de caractére a coté de chaque champs de saisie 
    var nombreCaractere = $("#nom").val().length;
    var msg = '|' + " " + nombreCaractere + ' Caractere(s)';
    $('#compteur1').text(msg);

    var nombreCaractere = $("#prenom").val().length;
    var msg = '|' + " "+ nombreCaractere + ' Caractere(s)';
    $('#compteur2').text(msg);

    var nombreCaractere = $("#dn").val().length;
    var msg = '|' + " "+ nombreCaractere + ' Caractere(s)';
    $('#compteur3').text(msg);

    var nombreCaractere = $("#adresse").val().length;
    var msg = '|' + " "+ nombreCaractere + ' Caractere(s)';
    $('#compteur4').text(msg);
    
    var nombreCaractere = $("#mail").val().length;
    var msg = '|' + " "+ nombreCaractere + ' Caractere(s)';
    $('#compteur5').text(msg);

    // validation des champs avec un minimum de 5 
    

                valid = true ;
                if($("#nom").val().length < 5 ){
                    $("#nom").css("border-color","#ff0000");
                    valid=false;
                }
                else{
                    $("#nom").css("border-color","#48DE14");
                }
                if($("#prenom").val().length < 5 ){
                    $("#prenom").css("border-color","#ff0000");
                    valid=false;
                }
                else{
                    $("#prenom").css("border-color","#48DE14");
                }
                if($("#dn").val().length < 5 ){
                    $("#date").css("border-color","#ff0000");
                    valid=false;
                }
                else{
                    $("#dn").css("border-color","#48DE14");
                }
                if($("#adresse").val().length < 5 ){
                    $("#adresse").css("border-color","#ff0000");
                    valid=false;
                }
                else{
                    $("#adresse").css("border-color","#48DE14");
                }
                if($("#mail").val().length < 5 ){
                    $("#mail").css("border-color","#ff0000");
                    valid=false;
                }
                else{
                    $("#mail").css("border-color","#48DE14");
                }

                return valid;

            });


            $("#formulaire").on("submit",function store(event) { 
                event.preventDefault();
                
                    var inputNom= document.getElementById("nom");
                    var inputPrenom= document.getElementById("prenom");
                    var inputDn= document.getElementById("dn");
                    var inputAdresse= document.getElementById("adresse");
                    var inputEmail= document.getElementById("mail");
                    
                    if($("#nom").val() !== "" && $("#prenom").val() !== "" && $("#dn").val() !== "" 
                  && $("#adresse").val() !== "" && $("#mail").val() !== "" ){
                    
                    //stocker les valeurs saisie dans le navigateur
                    localStorage.setItem("nom", inputNom.value);
                    localStorage.setItem("prenom", inputPrenom.value);
                    localStorage.setItem("dn", inputDn.value);
                    localStorage.setItem("adresse", inputAdresse.value);
                    localStorage.setItem("mail", inputEmail.value);

                   $('#success').addClass("alert alert-success").text("Bravo! le formulaire est sauvegardé.");

                  // $("#tablee").show();
                   
                   // ajout des valeurs saisie dans le tableau
                   document.querySelector("table tbody").innerHTML = document.querySelector("table tbody")
                   .innerHTML +'<tr><td>'+localStorage.getItem("nom")+'</td><td>'+localStorage.getItem("prenom")
                   
                  
                   +'</td><td>'+localStorage.getItem("dn")+'</td><td><a href="https://maps.google.com/maps?q='
                   +localStorage.getItem("adresse")+'">'+localStorage.getItem("adresse")
                  
                   +'</a></td><td><a href=mailto:>'+localStorage.getItem("mail")+'</a></td>';
                   }
                  
            });
            

    

});