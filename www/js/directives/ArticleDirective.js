alsharq.directive('articleTemplate', [
    'Article',
    'Popup',
    function(Article, Popup) {
        return {
            restrict: "E",
            scope: {
                article: '=',
            },
            templateUrl: "views/directives/article-template.html",
            link: function($scope, $element, $attrs) {
                $scope.showContent = false;

                $scope.favorite = function(){
                    if ( $element.hasClass('favorite') ) {
                        console.log('is a favorite. we will remove it...');
                        Article.favoriteRemove($scope.article.item_id).then(function(data){
                            $element.removeClass('favorite');
                            console.log('now it\'s not a favorite');
                        }, function(e){
                            console.log('there is an error when remove favorite');
                            Popup.showError('there is an error, please try again.');
                        });
                    } else {
                        console.log('is not a favorite. we will add it...');
                        Article.favoriteAdd($scope.article.item_id).then(function(data){
                            $element.addClass('favorite');
                            console.log('now it\'s a favorite');
                        }, function(e){
                            console.log('there is an error when add favorite');
                            Popup.showError('there is an error, please try again.');
                        });
                    }
                };

                $scope.later = function(){
                    if ( $element.hasClass('later') ) {
                        Article.laterRemove($scope.article.item_id).then(function(data){
                            $element.removeClass('later');
                        }, function(e){
                            Popup.showError('there is an error, please try again.');
                        });
                    } else {
                        Article.laterAdd($scope.article.item_id).then(function(data){
                            $element.addClass('later');
                        }, function(e){
                            Popup.showError('there is an error, please try again.');
                        });
                    }
                };

                $scope.hideContent = function(){
                    if( $scope.showContent ) {
                        $scope.showContent = false;
                    } else {
                        $scope.showContent = true;
                    }
                }
            }
        };
    }
]);
