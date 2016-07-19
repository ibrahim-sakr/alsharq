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
                $scope.article = $attrs.article;
                $scope.showContent = false;
                
                $scope.favorite = function(){
                    console.log("favorite " + $scope.article.channel_id);
                    // var method;
                    // if ( $element.hasClass('favorite') ) {
                    //     Article.favoriteRemove($attrs.article.id).then(function(data){
                    //         $element.removeClass('favorite');
                    //     }, function(e){
                    //         Popup.showError('there is an error, please try again.');
                    //     });
                    // } else {
                    //     Article.favoriteAdd($attrs.article.id).then(function(data){
                    //         $element.addClass('favorite');
                    //     }, function(e){
                    //         Popup.showError('there is an error, please try again.');
                    //     });
                    // }
                };

                $scope.later = function(){
                    console.log("later " + $scope.article.channel_id);
                    // var method;
                    // if ( $element.hasClass('later') ) {
                    //     Article.laterRemove($attrs.article.id).then(function(data){
                    //         $element.removeClass('later');
                    //     }, function(e){
                    //         Popup.showError('there is an error, please try again.');
                    //     });
                    // } else {
                    //     Article.laterAdd($attrs.article.id).then(function(data){
                    //         $element.addClass('later');
                    //     }, function(e){
                    //         Popup.showError('there is an error, please try again.');
                    //     });
                    // }
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
