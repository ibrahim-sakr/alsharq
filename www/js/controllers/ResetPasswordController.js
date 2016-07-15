alsharq.controller('AuthController', [
    '$scope',
    'Queue',
    'Popup',
    function($scope, Queue, Popup){
        $scope.email = "";

        $scope.reset = function(){
            var resetPasswordOptions = {
                'model': 'Auth',
                'method': 'resetPassword',
                'data': $scope.email,
                'success': function(data){
                    // do nothing
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
