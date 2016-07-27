alsharq.controller('LoginController', [
    '$scope',
    '$location',
    '$mdToast',
    'Queue',
    'Storage',
    'Popup',
    function($scope, $location, $mdToast, Queue, Storage, Popup){
        $scope.user = {};

        $scope.login = function(){
            // validate inputs
            if (!$scope.user.email || !$scope.user.password) {
                $mdToast.show(
                    $mdToast.simple()
                    .textContent('يجب تعبئة جميع الحقول.')
                    .hideDelay(3000)
                );
            }

            var loginOptions = {
                'model': 'Auth',
                'method': 'login',
                'data': $scope.user,
                'success': function(data){
                    // edit user object to add full_name
                    data.user.full_name = data.user.first_name + " " + data.user.last_name;
                    Storage.set({
                        'token': data.token,
                        'user': JSON.stringify(data.user)
                    });
                    $location.path('/home');

                    // pure javascript reload app to display any new data
                    // location.reload();
                },
                'error': function(e){
                    Popup.showError('حدث خطأ اثناء التحميل, حاول مرة أخرى.');
                }
            };
            // start dequeuing
            Queue.enqueue(loginOptions);
        };
    }
]);
