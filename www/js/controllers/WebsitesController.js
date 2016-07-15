alsharq.controller('WebsitesController', [
    '$scope',
    'Website',
    'Popup',
    function($scope, Website, Popup){
        $scope.websites = [];

        Website.all().then(function(data){
            $scope.websites = data.results;
        }, function(e){
            Popup.showError('there is an error, please try again.');
        });
    }
]);
