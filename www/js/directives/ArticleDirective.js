alsharq.directive('articleTemplate', [
    'Article',
    'Popup',
    function(Article, Popup) {
        return {
            restrict: "E",
            scope: {
                attrone: "@",
                attrtwo: "@"
            },
            templateUrl: "views/directives/article-template.html",
            link: function($scope, $element, $attrs) {
                
                $scope.favorite = function(article_id){
                    var method;
                    if ( $element.hasClass('favorite') ) {
                        Article.favoriteRemove(article_id).then(function(data){
                            $element.removeClass('favorite');
                        }, function(e){
                            Popup.showError('there is an error, please try again.');
                        });
                    } else {
                        Article.favoriteAdd(article_id).then(function(data){
                            $element.addClass('favorite');
                        }, function(e){
                            Popup.showError('there is an error, please try again.');
                        });
                    }
                };

                $scope.later = function(){
                    console.log('later');
                };
            }
        };
    }
]);
