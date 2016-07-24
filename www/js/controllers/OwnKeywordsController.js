alsharq.controller('OwnKeywordsController', [
    '$scope',
    '$mdDialog',
    'Keyword',
    'Popup',
    function($scope, $mdDialog, Keyword, Popup){
        $scope.new;

        Keyword.all().then(function(data){
            $scope.$parent.keywords = data.data.results;
        }, function(e){
            Popup.showError('there is an error, please try again.');
        });

        $scope.remove = function(content, index){
            Keyword.remove(content).then(function(data){
                $scope.$parent.keywords.splice(index, 1);
            }, function(e){
                Popup.showError('there is an error, please try again.');
            });
        };
    }
]);
