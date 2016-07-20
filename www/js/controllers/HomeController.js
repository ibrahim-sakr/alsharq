alsharq.controller('HomeController', [
    '$scope',
    'Article',
    '$mdToast',
    function($scope, Article, $mdToast){

        // display all feedPAP
        $scope.articles = [];
        $scope.count = 1;

        function load(){
            Article.all($scope.count).then(function(data){
                $scope.articles = $scope.articles.concat(data.data.results);
                console.log($scope.articles);
            }, function(e){
                $mdToast.show(
                    $mdToast.simple()
                    .textContent('there is an error while loading, please try again.')
                    .hideDelay(3000)
                );
            });
        }
        load();

        $scope.more = function(){
            $scope.count++;
            load();
        };
    }
]);
