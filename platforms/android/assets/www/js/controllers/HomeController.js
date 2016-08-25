alsharq.controller('HomeController', [
    '$scope',
    'Article',
    '$mdToast',
    'Subscription',
    '$location',
    'Admob',
    'Storage',
    'Country',
    function($scope, Article, $mdToast, Subscription, $location, Admob, Storage, Country){
        Admob.hide();

        $scope.articles = [];
        $scope.count    = 1;
        $scope.empty    = true;
        $scope.isMore = true;

        $scope.$user = JSON.parse(Storage.get('user'));

        function load(){
            var done = 0;
            function getArticles(filters){
                if (done == 2) {
                    Article.newsFeed({
                        filters: filters
                    }).then(function(articles){
                        $scope.articles = $scope.articles.concat(articles.data.results);
                        $scope.$broadcast('scroll.refreshComplete');
                        $scope.$broadcast('scroll.infiniteScrollComplete');

                        if (articles.data.results.length < 10) $scope.isMore = false;
                    }, function(e){
                        $mdToast.show(
                            $mdToast.simple()
                            .textContent('حدث خطأ اثناء التحميل, حاول مرة أخرىز')
                            .hideDelay(3000)
                        );
                    });
                };
            };
            
            if ($scope.$user.is_registered) {
                var filters = [];
                
                Subscription.all().then(function(data){
                    if (data.data.count == 0) {
                        $scope.empty = true;
                        $scope.isMore = false;
                        return;
                    }
                    $scope.empty = false;
                    for (var i = 0; i < data.data.results.length; i++) {
                        filters.push({
                            type: 'category',
                            id:   data.data.results[i].id
                        });
                    }
                    done++;
                    getArticles(filters);
                }, function(e){
                    $mdToast.show(
                        $mdToast.simple()
                        .textContent('حدث خطأ اثناء التحميل, حاول مرة أخرى.')
                        .hideDelay(3000)
                    );
                });

                Country.own().then(function(data){
                    if (data.data.count == 0) {
                        $scope.empty = true;
                        $scope.isMore = false;
                        return;
                    }
                    $scope.empty = false;
                    for (var i = 0; i < data.data.results.length; i++) {
                        filters.push({
                            type: '“country”',
                            name:   data.data.results[i].name
                        });
                    }
                    done++;
                    getArticles(filters);
                }, function(){
                    $mdToast.show(
                        $mdToast.simple()
                        .textContent('حدث خطأ اثناء التحميل, حاول مرة أخرى.')
                        .hideDelay(3000)
                    );
                });

            } else {
                Article.all($scope.count).then(function(data){
                    // hide loading
                    $scope.articles = $scope.articles.concat(data.data.results);
                    $scope.$broadcast('scroll.refreshComplete');
                    $scope.$broadcast('scroll.infiniteScrollComplete');
                }, function(e){
                    $mdToast.show(
                        $mdToast.simple()
                        .textContent('حدث خطأ اثناء التحميل, حاول مرة أخرى.')
                        .hideDelay(3000)
                    );
                });
            }
        }
        load();

        $scope.more = function(){
            $scope.count = $scope.count + 1;
            load();
        };

        $scope.refresh = function(){
            $scope.count    = 1;
            $scope.articles = [];
            load();
        };
    }
]);
