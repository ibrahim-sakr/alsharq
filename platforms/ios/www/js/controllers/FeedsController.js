alsharq.controller('FeedsController', [
    '$scope',
    '$routeParams',
    'Article',
    '$mdToast',
    '$location',
    'Admob',
    function($scope, $routeParams, Article, $mdToast, $location, Admob){
        Admob.show();

        $scope.articles = [];
        $scope.isMore   = true;
        console.log($routeParams);
        if ( $routeParams.country ) {
            Article.newsFeed({
                filters: [
                    {
                        type: "country",
                        name: $routeParams.country,
                    }
                ]
            }).then(function(data){
                $scope.articles = data.data.results;
                if (data.data.results.length < 10) $scope.isMore = false;
            }, function(e){
                $location.path('/home');
                $mdToast.show(
                    $mdToast.simple()
                    .textContent('حدث خطأ اثناء التحميل, حاول مرة أخرى.')
                    .hideDelay(3000)
                );
            });
        }

        if ( $routeParams.keywords ) {
            var filter = [];
            if (typeof $routeParams.keywords != 'string') {
                for (var i = 0; i < $routeParams.keywords.length; i++) {
                    filter.push({
                        type: "keyword",
                        content: $routeParams.keywords[i]
                    });
                }
            } else {
                filter = [
                    {
                        type: "keyword",
                        content: $routeParams.keywords
                    }
                ];
            }
            Article.newsFeed({
                filters: filter
            }).then(function(data){
                $scope.articles = data.data.results;
                if (data.data.results.length < 10) $scope.isMore = false;
            }, function(e){
                $location.path('/home');
                $mdToast.show(
                    $mdToast.simple()
                    .textContent('حدث خطأ اثناء التحميل, حاول مرة أخرى.')
                    .hideDelay(3000)
                );
            });
        }

        if ( $routeParams.category ) {
            Article.newsFeed({
                filters: [
                    {
                        type: "category",
                        id: $routeParams.category,
                    }
                ]
            }).then(function(data){
                $scope.articles = data.data.results;
                if (data.data.results.length < 10) $scope.isMore = false;
            }, function(e){
                $location.path('/home');
                $mdToast.show(
                    $mdToast.simple()
                    .textContent('حدث خطأ اثناء التحميل, حاول مرة أخرى.')
                    .hideDelay(3000)
                );
            });
        }

    }
]);



