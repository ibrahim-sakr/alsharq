alsharq.controller('ProfileController', [
    '$scope',
    'Storage',
    'Queue',
    'Popup',
    '$mdToast',
    function($scope, Storage, Queue, Popup, $mdToast){
        $scope.user = JSON.parse( Storage.get('user') );
        // profile_pic: "" (File upload) (Content-Type: Multipart/form-data)


        $scope.update = function(){
            if ($scope.user.password != $scope.user.password_confirmation) {
                $mdToast.show(
                    $mdToast.simple()
                    .textContent('password didn\'t match!')
                    .hideDelay(3000)
                );
                return;
            }
            if (!$scope.user.full_name || !$scope.user.email) {
                $mdToast.show(
                    $mdToast.simple()
                    .textContent('you must fill all fields')
                    .hideDelay(3000)
                );
                return;
            };

            delete $scope.user.password_confirmation;
            delete $scope.user.profile_pic;

            // update
            var profileOptions = {
                'model': 'Auth',
                'method': 'updateProfile',
                'data': $scope.user,
                'success': function(data){
                    // edit user object to add full_name
                    data.user.full_name = data.user.first_name + " " + data.user.last_name;
                    Storage.set('user', JSON.stringify(data.user));
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
