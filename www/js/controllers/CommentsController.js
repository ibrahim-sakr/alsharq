alsharq.controller('CommentsController', [
    '$scope',
    '$mdDialog',
    'Comment',
    'Popup',
    'Storage',
    'article',
    function($scope, $mdDialog, Comment, Popup, Storage, article){
        $scope.article = article;
        $scope.commCount;
        $scope.commResults = [];
        $scope.commNew = {
            article_id: $scope.article.item_id,
            comment: ""
        };

        Comment.all($scope.article.item_id).then(function(data){
            $scope.commResults = data.data.results;
        }, function(e){
            Popup.showError('there is an error, please try again.');
        });

        $scope.hide = function() {
            $mdDialog.hide();
        };
        $scope.cancel = function() {
            $mdDialog.cancel();
        };
        $scope.answer = function(answer) {
            $mdDialog.hide(answer);
        };


        $scope.count = function(){
            Comment.count($scope.article.item_id).then(function(data){
                $scope.commCount = data.message;
            }, function(e){
                Popup.showError('there is an error, please try again.');
            });
        };

        $scope.add = function(){
            if ($scope.commNew.comment == "") {
                Popup.showError('insert a comment then submit.');
                return;
            }

            Comment.add($scope.commNew).then(function(data){
                var user = JSON.parse( Storage.get('user') );
                $scope.commResults.unshift({
                    "comment": $scope.commNew.comment,
                    "user": {
                        "first_name":  user.first_name,
                        "last_name":   user.last_name,
                        "profile_pic": user.profile_pic
                    }
                });
                $scope.commNew.comment = "";
            }, function(e){
                Popup.showError('there is an error, please try again.');
            });
        }
    }
]);
