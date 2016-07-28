alsharq.controller('HomeController', [
    '$scope',
    'Article',
    '$mdToast',
    'Subscription',
    'Popup',
    '$location',
    function($scope, Article, $mdToast, Subscription, Popup, $location){

        // display all feedPAP
        $scope.articles = [];
        $scope.count = 1;

        function load(){
            Subscription.all().then(function(data){
                if (data.data.results) {
                    var filter = [];

                    for (var i = 0; i < data.data.results.length; i++) {
                        filter.push({
                            type: 'category',
                            id:   data.data.results[i].id
                        });
                    }

                    Article.newsFeed({
                        filters: filter
                    }).then(function(articles){
                        // $scope.articles = articles.data.results;
                        $scope.articles = $scope.articles.concat(articles.data.results);
                    }, function(e){
                        $mdToast.show(
                            $mdToast.simple()
                            .textContent('حدث خطأ اثناء التحميل, حاول مرة أخرىز')
                            .hideDelay(3000)
                        );
                    });

                } else {
                    Popup.showError('يجب عليك الاشتراك في بضعة مواقع لتظهر لكز.');
                }
            }, function(e){});
        }
        load();

        $scope.more = function(){
            $scope.count++;
            load();
        };

        $scope.refresh = function(){
            $scope.count    = 1;
            $scope.articles = [];
            load();
        };
    }
]);
