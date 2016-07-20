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

        var methodAll    = $scope.type + "All",
            methodRemove = $scope.type + "Remove";
        
        Article[methodAll]().then(function(data){
            $scope.articles = data.data.results;
            console.log($scope.articles);
        }, function(e){
            Popup.showError('there is an error, please try again.');
        });

        $scope.remove = function(id, index){
            Article[methodRemove](id).then(function(data){
                $scope.articles.splice(index, 1);
            }, function(e){
                Popup.showError('there is an error, please try again.');
            });
        };

        $scope.readed = function(id, index){
            // Article.favoriteRemove().then(function(data){
            //     $scope.articles.splice(index, 1);
            // }, function(e){
            //     Popup.showError('there is an error, please try again.');
            // });
        };
    }
]);
