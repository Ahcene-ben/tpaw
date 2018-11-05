$(document).ready(function () {

    var nom = $('#inputNom'),
        prenom = $('#inputPrenom'),
        date = $('#inputDate'),
        adresse = $('#inputAdresse'),
        mail = $('#inputEmail3');

    $(".champ").keyup(function () {
        if ($(this).val().length < 5) {
            // $(this).css({
            //     borderColor: 'red',
            //     color: 'red'
            // });
            $(this).addClass("is-invalid");
        }
        else {
            $(this).removeClass("is-invalid");
            $(this).addClass("is-valid");
            // $(this).css({
            //     borderColor: 'green',
            //     color: 'green'
            // });
        }

    });
    
    $("#envoi").click(function(e){
        e.preventDefault(); // on annule la fonction par défaut du bouton d'envoi
    
        // puis on lance la fonction de vérification sur tous les champs :
        verifier(nom);
        verifier(prenom);
        verifier(date);
        verifier(adresse);
        verifier(mail);
    });

    function verifier(item){
        if(item.val() == ""){ // si le champ est vide
            $("#erreur").css('display', 'block'); // on affiche le message d'erreur
            // item.css({ // on rend le champ rouge
            //     borderColor : 'red',
            //     color : 'red'
            // });

            item.addClass("is-invalid");
        }
    }
    
    
    
});

