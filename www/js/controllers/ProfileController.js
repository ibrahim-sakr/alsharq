alsharq.controller('ProfileController', [
    '$scope',
    'Storage',
    'Queue',
    'Popup',
    function($scope, Storage, Queue, Popup){
        $scope.user = JSON.parse( Storage.get('user') );
        // email
        // last_name
        // full_name
        // password
        // profile_pic: "" (File upload) (Content-Type: Multipart/form-data)


        $scope.update = function(){
            // validate inputs
            if ($scope.user.password != $scope.user.password_confirmation) {
                $mdToast.show(
                    $mdToast.simple()
                    .textContent('password didn\'t match!')
                    .hideDelay(3000)
                );
                return;
            }
            
            if (!$scope.user.first_name || $scope.user.email) {
                $mdToast.show(
                    $mdToast.simple()
                    .textContent('you must fill all fields')
                    .hideDelay(3000)
                );
                return;
            }

            delete $scope.user.password_confirmation;

            // update
            var profileOptions = {
                'model': 'Auth',
                'method': 'updateProfile',
                'data': $scope.user,
                'success': function(data){
                    Storage.set('user', data.user);
                    $location.path('/home');
                },
                'error': function(e){
                    Popup.showError('there is an error, please try again.');
                }
            };

            // start dequeuing
            Queue.enqueue(profileOptions);
        };
    }
]);
