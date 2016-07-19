alsharq.controller('OwnArticlesController', [
    '$scope',
    '$rootScope',
    '$routeParams',
    'Article',
    'Popup',
    function($scope, $rootScope, $routeParams, Article, Popup){
        $scope.type = $routeParams.prefrence;
        $rootScope.pageTitle = 'My ' + $scope.type + ' Articles';
        

        $scope.articles = [
            {
                "body": " ",
                "channel_id": 1,
                "channel_name": "نبض الشارع",
                "channel_type": "category",
                "country_id": [ 1 ],
                "country_name": [
                    "Jordan"
                ],
                "date_published": "2016-03-13T21:36:00",
                "interest_id": [ 1 ],
                "interest_name": [ "Local" ],
                "is_favorite": false,
                "is_readlater": false,
                "item_id": "336",
                "photos": [
                    "http://www.towerfire.co.uk/wp-content/uploads/2013/10/aa_682_1127571a.jpg",
                ],
                "status": 1,
                "summary": "article content",
                "thumbnail": null,
                "title": "الطراونة: نفس حزبي بشعارات المعتصمين - فيديو",
                "url": "http://192.168.0.10:8080/article/336",
                "videos": null,
                "website_id": 1,
                "website_image": null,
                "website_name": "Khaberni"
            }
        ];
        
        // Article.favoriteAll($routeParams.id).then(function(data){
        //     $scope.articles = data.results;
        // }, function(e){
        //     Popup.showError('there is an error, please try again.');
        // });

        $scope.favoriteRemove = function(id, index){
            Article.favoriteRemove().then(function(data){
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
