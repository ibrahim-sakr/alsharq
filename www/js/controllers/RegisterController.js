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
                    .textContent('كلمة المرور غير متطابقة!')
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
                    // edit user object to add full_name
                    data.user.full_name = data.user.first_name + " " + data.user.last_name;
                    Storage.set({
                        'token': data.token,
                        'user': JSON.stringify(data.user)
                    });
                    $location.path('/websites');
                },
                'error': function(e){
                    Popup.showError('حدث خطأ اثناء التحميل, حاول مرة أخرى.');
                }
            };
            // start dequeuing
            Queue.enqueue(registerOptions);
        };
    }
]);
