alsharq.controller('WebsitesController', [
    '$scope',
    '$window',
    '$location',
    'Website',
    'Popup',
    '$mdToast',
    function($scope, $window, $location, Website, Popup, $mdToast){
        $scope.websites = [];
        $scope.count = 1;

        function load(){
            Website.all($scope.count).then(function(data){
                if (data.data.results) {
                    $scope.websites = $scope.websites.concat(data.data.results);
                } else {
                    $mdToast.show(
                        $mdToast.simple()
                        .textContent('there is no more!!.')
                        .hideDelay(3000)
                    );
                }
            }, function(e){
                Popup.showError('there is an error, please try again.');
            });
        }
        load();

        $scope.more = function(){
            $scope.count++;
            load();
        }

        $scope.next = function(id){
            $location.path('/categories-writers/' + id);
        };
    }
]);
