alsharq.controller('ArticleController', [
    '$scope',
    '$routeParam',
    'Storage',
    'Comment',
    'Popup',
    function($scope, $routeParam, Storage, Comment, Popup){
        $scope.article = {};
        $scope.commResults = [];
        $scope.commCount;
        $scope.commNew = {
            article_id: $routeParam.id,
            comment: ""
        };

        Article.all({ "article_id": $routeParam.id }).then(function(data){
            $scope.article = data.results[0];
        }, function(e){});

        $scope.comments = {
            count: function(){
                Comment.count($routeParam.id).then(function(data){
                    $scope.commCount = data.message;
                }, function(e){
                    Popup.showError('there is an error, please try again.');
                });
            },

            all: function(){
                Comment.all($routeParam.id).then(function(data){
                    $scope.commResults = data.results;
                }, function(e){
                    Popup.showError('there is an error, please try again.');
                });
            },

            add: function(){
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
                }, function(e){
                    Popup.showError('there is an error, please try again.');
                });
            }
        }
    }
]);
