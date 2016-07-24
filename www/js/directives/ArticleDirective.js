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
                        Article.favoriteRemove($scope.article.item_id).then(function(data){
                            $element.removeClass('favorite');
                            $mdToast.show(
                                $mdToast.simple()
                                .textContent('removed from favourite!')
                                .hideDelay(3000)
                            );
                        }, function(e){
                            Popup.showError('there is an error, please try again.');
                        });
                    } else {
                        Article.favoriteAdd($scope.article.item_id).then(function(data){
                            $element.addClass('favorite');
                            $mdToast.show(
                                $mdToast.simple()
                                .textContent('added to favourite!')
                                .hideDelay(3000)
                            );
                        }, function(e){
                            Popup.showError('there is an error, please try again.');
                        });
                    }
                };

                $scope.later = function(){
                    if ( $element.hasClass('later') ) {
                        Article.laterRemove($scope.article.item_id).then(function(data){
                            $element.removeClass('later');
                            $mdToast.show(
                                $mdToast.simple()
                                .textContent('removed from Later!')
                                .hideDelay(3000)
                            );
                        }, function(e){
                            Popup.showError('there is an error, please try again.');
                        });
                    } else {
                        Article.laterAdd($scope.article.item_id).then(function(data){
                            $element.addClass('later');
                            $mdToast.show(
                                $mdToast.simple()
                                .textContent('added to later!')
                                .hideDelay(3000)
                            );
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
