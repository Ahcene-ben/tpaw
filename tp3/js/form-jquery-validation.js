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
            $(date).removeClass("is-invalid");
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

    $("#envoi").on("click", function (event) {
        event.preventDefault(); // on annule la fonction par défaut du bouton d'envoi

        if ($("nom").val() !== "" && $("prenom").val() !== "" && $("date").val() !== "" && $("adresse").val() !== "" &&
            $("mail").val() !== "") {

            $('#myModal').modal("show");
            $('.modal-title').html("Bienvenue " + document.querySelector("#inputPrenom").value);
            $('.modal-body').html("Vous etes nés le  " + document.querySelector("#inputDate").value + "</br> et vous habitez à :" + '<img src="https://maps.googleapis.com/maps/api/staticmap?markers=' + document.querySelector("#inputAdresse").value + '&zoom=10&size=400x300&key=AIzaSyAkmvI9DazzG9p77IShsz_Di7-5Qn7zkcg"/>');

        } 
    });


});

