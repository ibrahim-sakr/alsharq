alsharq.controller('ContactController', [
    '$scope',
    'Contact',
    'Popup',
    '$location',
    '$mdToast',
    function($scope, Contact, Popup, $location, $mdToast){
        $scope.contact = {};
        // name: 1,
        // email: ""
        // subject: ""
        // message: ""

        $scope.send = function(){
            Contact.send($scope.contact).then(function(data){
                $location.path('/home');
                $mdToast.show(
                    $mdToast.simple()
                    .textContent('the message has been sent.')
                    .hideDelay(3000)
                );
            }, function(e){
                Popup.showError('there is an error, please try again.');
            });
        };
    }
]);



