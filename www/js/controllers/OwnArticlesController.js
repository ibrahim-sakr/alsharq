alsharq.controller('OwnArticlesController', [
    '$scope',
    '$rootScope',
    '$routeParams',
    'Article',
    'Popup',
    function($scope, $rootScope, $routeParams, Article, Popup){
        $scope.type = $routeParams.prefrence;
        $rootScope.pageTitle = 'My ' + $scope.type + ' Articles';
        

        $scope.articles = [];
        
        Article.favoriteAll($routeParams.id).then(function(data){
            $scope.articles = data.results;
        }, function(e){
            Popup.showError('there is an error, please try again.');
        });
    }
]);
