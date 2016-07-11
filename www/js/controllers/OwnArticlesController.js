alsharq.controller('OwnArticlesController', [
    '$scope',
    '$rootScope',
    '$routeParams',
    function($scope, $rootScope, $routeParams){
        $scope.type = $routeParams.prefrence;
        
        $rootScope.pageTitle = 'My ' + $scope.type + ' Articles';
    }
]);
