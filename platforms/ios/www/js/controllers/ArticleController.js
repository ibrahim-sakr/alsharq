alsharq.controller('ArticleController', [
    '$rootScope',
    '$scope',
    '$routeParams',
    'Comment',
    'Popup',
    'Article',
    '$mdDialog',
    '$mdToast',
    'Admob',
    function($rootScope, $scope, $routeParams, Comment, Popup, Article, $mdDialog, $mdToast, Admob){
        Admob.show();
        $scope.article   = {};
        $rootScope.commCount = 0;
        $scope.articleJS = angular.element(document.getElementById('article'));

        // increase count of readinf for article, no need th retrieve any thing.
        Article.read($routeParams.id);

        Article.find($routeParams.id).then(function(data){
            $scope.article = data.data.results[0];
        }, function(e){
            Popup.showError('حدث خطأ اثناء التحميل, حاول مرة أخرى.');
        });

        Comment.count($routeParams.id).then(function(data){
            $rootScope.commCount = Number(data.data.message);
        }, function(e){
            Popup.showError('حدث خطأ اثناء التحميل, حاول مرة أخرى.');
        });



        $scope.share = function(){
            var options = {
                message: "Check this out...",
                subject: $scope.article.title,
                url: $scope.article.url,
                chooserTitle: 'Pick an app'
            };
            function onSuccess(data){
                console.log(data);
            };
            function onError(msg){
                console.log(msg);
            };
            window.plugins.socialsharing.shareWithOptions(options, onSuccess, onError);
        };

        $scope.favorite = function(){
            
            if ( $scope.articleJS.hasClass('favorite') ) {
                Article.favoriteRemove($scope.article.item_id).then(function(data){
                    $scope.articleJS.removeClass('favorite');
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
                    $scope.articleJS.addClass('favorite');
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
            if ( $scope.articleJS.hasClass('later') ) {
                Article.laterRemove($scope.article.item_id).then(function(data){
                    $scope.articleJS.removeClass('later');
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
                    $scope.articleJS.addClass('later');
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

        $scope.resize = function(num) {
            var body = document.getElementById('article-body');
            if (body.style.fontSize == "") {
                body.style.fontSize = "1.0em";
            }
            body.style.fontSize = parseFloat(body.style.fontSize) + (num * 0.2) + "em";
        }
        
        $scope.showComments = function(ev){
            $mdDialog.show({
                controller: 'CommentsController',
                templateUrl: 'views/comments.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose:false,
                fullscreen: true,
                locals: {
                    article: $scope.article
                },
            });
        };
    }
]);
