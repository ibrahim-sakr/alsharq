alsharq.controller('AuthController', [
    '$scope',
    '$location',
    '$mdToast',
    'Queue',
    'Storage',
    'Popup',
    function($scope, $location, $mdToast, Queue, Storage, Popup){
        $scope.user = {
            // email: "",
            // password: ""
        };

        $scope.login = function(){
            // validate inputs
            if (!$scope.user.email || !$scope.user.password) {
                $mdToast.show(
                    $mdToast.simple()
                    .textContent('you must fill all fields.')
                    .hideDelay(3000)
                );
            }

            var loginOptions = {
                'model': 'Auth',
                'method': 'login',
                'data': $scope.user,
                'success': function(data){
                    Storage.set({
                        'token': data.token,
                        'user': data.user
                    });
                    $location.path('/home');

                    // pure javascript reload app to display any new data
                    location.reload();
                },
                'error': function(e){
                    Popup.showError('there is an error, please try again.');
                }
            };
            // start dequeuing
            Queue.enqueue(loginOptions);
        };
        

        $scope.guest = function(){
            var loginOptions = {
                'model': 'Auth',
                'method': 'loginGuest',
                'data': Storage.get('uuid'),
                'success': function(data){
                    Storage.set({
                        'token': data.token,
                        'user': data.user
                    });
                    $location.path('/home');

                    // pure javascript reload app to display any new data
                    location.reload();
                },
                'error': function(e){
                    Popup.showError('there is an error, please try again.');
                }
            };
            // start dequeuing
            Queue.enqueue(loginOptions);
        };
    }
]);
