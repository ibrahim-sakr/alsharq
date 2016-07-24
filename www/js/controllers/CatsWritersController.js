alsharq.controller('CatsWritersController', [
    '$scope',
    '$routeParams',
    '$mdToast',
    'Feed',
    function($scope, $routeParams, $mdToast, Feed){
        $scope.cCount  = 1;
        $scope.wCount  = 1;
        $scope.cats    = [];
        $scope.writers = [];

        $scope.loadCats = function(){
            Feed.all({
                website_id: $routeParams.id,
                type: "categories",
                page: $scope.cCount,
            }).then(function success(data){
                $scope.cats = $scope.cats.concat(data.data.results);
                $scope.cCount++;
            }, function fail(e){
                $mdToast.show(
                    $mdToast.simple()
                    .textContent('can\'t load the data, please try again.')
                    .hideDelay(3000)
                );
            });
        };

        $scope.loadWriters = function(){
            Feed.all({
                website_id: $routeParams.id,
                type: "writers",
                page: $scope.wCount,
            }).then(function success(data){
                $scope.writers = $scope.writers.concat(data.data.results);
                $scope.wCount++;
            }, function fail(e){
                $mdToast.show(
                    $mdToast.simple()
                    .textContent('can\'t load the data, please try again.')
                    .hideDelay(3000)
                );
            });
        };

        $scope.loadCats();
        $scope.loadWriters();

        $scope.subscribe = function(id, type, $index){
            Feed.subscribe(id).then(function success(data){
                $scope[type][$index].is_subscribed = !$scope[type][$index].is_subscribed;
            }, function fail(e){
                $mdToast.show(
                    $mdToast.simple()
                    .textContent('can\'t subscripte, please try again.')
                    .hideDelay(3000)
                );
            });
        };
    }
]);





















