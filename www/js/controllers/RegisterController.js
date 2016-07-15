alsharq.controller('RegisterController', [
    '$scope',
    '$location',
    '$mdToast',
    'Queue',
    'Storage',
    'Popup',
    function($scope, $location, $mdToast, Queue, Storage, Popup){
        $scope.user = {
            // email: "",
            // fullname: "",
            // password: "",
            // password_confirmation: "",
        };

        $scope.register = function(){
            // validate password fields
            if ( $scope.user.password != $scope.user.password_confirmation ) {
                $mdToast.show(
                    $mdToast.simple()
                    .textContent('password didn\'t match!')
                    .hideDelay(3000)
                );
                return;
            }

            // remove password_confirmation from $scope.user
            delete $scope.user.password_confirmation;

            // send to the server
            var registerOptions = {
                'model': 'Auth',
                'method': 'register',
                'data': $scope.user,
                'success': function(data){
                    Storage.set({
                        'token': data.token,
                        'user': data.user
                    });
                    $location.path('/countries');
                },
                'error': function(e){
                    Popup.showError('there is an error, please try again.');
                }
            };

            // start dequeuing
            Queue.enqueue(registerOptions);
        };
    }
]);
