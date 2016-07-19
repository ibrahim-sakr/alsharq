alsharq.controller('CatsWritersController', [
    '$scope',
    '$routeParams',
    function($scope, $routeParams){
        console.log($routeParams.id);
    }
]);
