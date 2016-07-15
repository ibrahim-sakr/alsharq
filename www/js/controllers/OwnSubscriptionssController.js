alsharq.controller('OwnWebsitesController', [
    '$scope',
    'Subscription',
    'Popup',
    function($scope, Subscription, Popup){
        $scope.subscriptions = [];

        Subscription.all().then(function(data){
            $scope.subscriptions = data.results;
        }, function(e){
            Popup.showError('there is an error, please try again.');
        });

        $scope.remove = function(){};
        $scope.open = function(){};
        $scope.notificaton = function(){};
    }
]);
