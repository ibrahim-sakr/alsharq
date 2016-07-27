alsharq.controller('FeedsController', [
    '$scope',
    '$routeParams',
    'Article',
    '$mdToast',
    '$location',
    function($scope, $routeParams, Article, $mdToast, $location){
        $scope.articles = [];

        console.log($routeParams);
        // $routeParams = {
        //     country:  "Egypt",
        //     keywords: ["test", "test2"],
        // }

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
            }, function(e){
                $location('/home');
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
                    filetr.push({
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
            }, function(e){
                $location('/home');
                $mdToast.show(
                    $mdToast.simple()
                    .textContent('حدث خطأ اثناء التحميل, حاول مرة أخرى.')
                    .hideDelay(3000)
                );
            });
        }

        // if ( $routeParams.websites ) {
        //     // load websites
        // }

        // $scope.more = function(){};
        // $scope.refresh = function(){};
    }
]);



