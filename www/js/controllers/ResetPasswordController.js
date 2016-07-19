alsharq.controller('ResetPasswordController', [
    '$scope',
    'Queue',
    'Popup',
    '$mdToast',
    function($scope, Queue, Popup, $mdToast){
        $scope.email = "";

        $scope.reset = function(){
            var resetPasswordOptions = {
                'model': 'Auth',
                'method': 'resetPassword',
                'data': $scope.email,
                'success': function(data){
                    $mdToast.show(
                        $mdToast.simple()
                        .textContent('Password Reseted.')
                        .hideDelay(3000)
                    );
                },
                'error': function(e){
                    Popup.showError('there is an error, please try again.');
                }
            };

            // start dequeuing
            Queue.enqueue(resetPasswordOptions);
        };
    }
]);
