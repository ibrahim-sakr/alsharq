alsharq.controller('OwnArticlesController', [
    '$scope',
    '$rootScope',
    '$routeParams',
    'Article',
    'Popup',
    function($scope, $rootScope, $routeParams, Article, Popup){
        $scope.type = $routeParams.prefrence;
        $rootScope.pageTitle = ($scope.type == "favorite") ? "مقالاتي المفضلة" : "مقالات للقراءه لاحقا";
        $scope.articles = [];

        var methodAll    = $scope.type + "All",
            methodRemove = $scope.type + "Remove";
        
        Article[methodAll]().then(function(data){
            $scope.articles = data.data.results;
        }, function(e){
            Popup.showError('حدث خطأ اثناء التحميل, حاول مرة أخرى.');
        });

        $scope.remove = function(id, index){
            Article[methodRemove](id).then(function(data){
                $scope.articles.splice(index, 1);
            }, function(e){
                Popup.showError('حدث خطأ اثناء التحميل, حاول مرة أخرى.');
            });
        };

        $scope.readed = function(id, index){
            // Article.favoriteRemove().then(function(data){
            //     $scope.articles.splice(index, 1);
            // }, function(e){
            //     Popup.showError('حدث خطأ اثناء التحميل, حاول مرة أخرى.');
            // });
        };
    }
]);
