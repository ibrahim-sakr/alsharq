alsharq.controller('ContactController', [
    '$scope',
    'Contact',
    'Popup',
    '$location',
    '$mdToast',
    'Storage',
    function($scope, Contact, Popup, $location, $mdToast, Storage){
        var $user = JSON.parse( Storage.get('user') );
        $scope.contact = {
            name: $user.first_name +" "+ $user.last_name,
            email: $user.email,
        };

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



