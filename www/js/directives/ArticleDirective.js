alsharq.directive('articleTemplate', [
    'Article',
    'Popup',
    '$mdToast',
    function(Article, Popup, $mdToast) {
        return {
            restrict: "E",
            scope: {
                article: '=',
            },
            templateUrl: "views/directives/article-template.html",
            link: function($scope, $element, $attrs) {
                $scope.showContent = false;

                $scope.share = function(){
                    console.log($scope.article);
                    var options = {
                        message: "Check this out...",
                        subject: $scope.article.title,
                        url: $scope.article.url,
                        chooserTitle: 'Pick an app'
                    };

                    window.plugins.socialsharing.shareWithOptions(options, function onSuccess(data){
                        console.log(data);
                    }, function onError(msg){
                        console.log(msg);
                    });
                };

                $scope.favorite = function(){
                    if ( $element.hasClass('favorite') ) {
                        Article.favoriteRemove($scope.article.item_id).then(function(data){
                            $element.removeClass('favorite');
                            $mdToast.show(
                                $mdToast.simple()
                                .textContent('تم الحذف!')
                                .hideDelay(3000)
                            );
                        }, function(e){
                            Popup.showError('حدث خطأ اثناء التحميل, حاول مرة أخرى.');
                        });
                    } else {
                        Article.favoriteAdd($scope.article.item_id).then(function(data){
                            $element.addClass('favorite');
                            $mdToast.show(
                                $mdToast.simple()
                                .textContent('تمت الاضافة!')
                                .hideDelay(3000)
                            );
                        }, function(e){
                            Popup.showError('حدث خطأ اثناء التحميل, حاول مرة أخرى.');
                        });
                    }
                };

                $scope.later = function(){
                    if ( $element.hasClass('later') ) {
                        Article.laterRemove($scope.article.item_id).then(function(data){
                            $element.removeClass('later');
                            $mdToast.show(
                                $mdToast.simple()
                                .textContent('تم الحذف!')
                                .hideDelay(3000)
                            );
                        }, function(e){
                            Popup.showError('حدث خطأ اثناء التحميل, حاول مرة أخرى.');
                        });
                    } else {
                        Article.laterAdd($scope.article.item_id).then(function(data){
                            $element.addClass('later');
                            $mdToast.show(
                                $mdToast.simple()
                                .textContent('تمت الاضافة!')
                                .hideDelay(3000)
                            );
                        }, function(e){
                            Popup.showError('حدث خطأ اثناء التحميل, حاول مرة أخرى.');
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
