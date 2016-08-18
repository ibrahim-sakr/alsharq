alsharq.controller('CatsWritersController', [
    '$scope',
    '$routeParams',
    '$mdToast',
    'Feed',
    'Admob',
    function($scope, $routeParams, $mdToast, Feed, Admob){
        Admob.show();
        $scope.cCount        = 1;
        $scope.wCount        = 1;
        $scope.cats          = [];
        $scope.writers       = [];
        $scope.isMoreCats    = true;
        $scope.isMoreWriters = true;

        $scope.loadCats = function(){
            console.log('start loading!!!');
            Feed.all({
                website_id: $routeParams.id,
                type: "category",
                page: $scope.cCount,
            }).then(function success(data){
                $scope.cats = $scope.cats.concat(data.data.results);
                // if (data.data.results.length < 10) $scope.isMoreCats = false;
                $scope.cCount++;
            }, function fail(e){
                $mdToast.show(
                    $mdToast.simple()
                    .textContent('حدث خطأ اثناء التحميل, حاول مرة أخرى.')
                    .hideDelay(3000)
                );
            });
        };
        // $scope.loadCats();

        $scope.loadWriters = function(){
            Feed.all({
                website_id: $routeParams.id,
                type: "writer",
                page: $scope.wCount,
            }).then(function success(data){
                $scope.writers = $scope.writers.concat(data.data.results);
                if (data.data.results.length < 10) $scope.isMoreWriters = false;
                $scope.wCount++;
            }, function fail(e){
                $mdToast.show(
                    $mdToast.simple()
                    .textContent('حدث خطأ اثناء التحميل, حاول مرة أخرى.')
                    .hideDelay(3000)
                );
            });
        };

        // $scope.loadWriters();

        $scope.subscribe = function(id, type, $index){
            Feed.subscribe(id).then(function success(data){
                $scope[type][$index].is_subscribed = !$scope[type][$index].is_subscribed;
            }, function fail(e){
                $mdToast.show(
                    $mdToast.simple()
                    .textContent('حدث خطأ اثناء التحميل, حاول مرة أخرى.')
                    .hideDelay(3000)
                );
            });
        };
    }
]);





















