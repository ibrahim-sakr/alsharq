alsharq.controller('RelatedAccountsController', [
    '$scope',
    'Admob',
    function($scope, Admob){
        Admob.show();

        $scope.google   = $scope.$parent.$user().google_connected;
        $scope.facebook = $scope.$parent.$user().facebook_connected;

        console.log($scope.google);
        console.log($scope.facebook);

        $scope.remove = function(type){
            console.log(type);
        };
    }
]);



