alsharq.controller('RelatedAccountsController', [
    '$scope',
    'Admob',
    'Auth',
    'Storage',
    function($scope, Admob, Auth, Storage){
        Admob.show();

        $scope.google   = $scope.$parent.$user().google_connected;
        $scope.facebook = $scope.$parent.$user().facebook_connected;

        console.log($scope.google);
        console.log($scope.facebook);

        $scope.remove = function(account){
            Auth.deleteSocial(account).then(function(data){
                var user = $scope.$parent.$user();
                user[account + '_connected'] = false;
                Storage.set('user', JSON.stringify(user));
                $scope[account] = false;
            }, function(e){
                console.log(e);
            });
        };
    }
]);



