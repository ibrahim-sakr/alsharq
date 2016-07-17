alsharq.controller('ContactController', [
    '$scope',
    'Contact',
    'Popup',
    function($scope, Contact, Popup){
        $scope.contact = {};
        // name: 1,
        // email: ""
        // subject: ""
        // message: ""

        $scope.send = function(){
            Contact.send($scope.contact).then(function(data){}, function(e){
                Popup.showError('there is an error, please try again.');
            });
        };
    }
]);



