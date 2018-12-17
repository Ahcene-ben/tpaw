var contactStore = (function () {

    // variable privée
    var contactList = [];

    // Expose these functions via an interface while hiding
    // the implementation of the module within the function() block

    return {
        add: function () {
            var contact = {
                name: $('#name').val(),
                firstname: $('#firstname').val(),
                date: $('#birth').val(),
                adress: $('#adresse').val(),
                mail: $('#mail').val()
            };
            // ajout du contact à la liste
            contactList.push(contact);

            return contactList;
        },

        getList: function () {
            return contactList;
        }
    };
})();