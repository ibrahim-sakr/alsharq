alsharq.controller('OwnKeywordsController', [
    '$scope',
    '$mdDialog',
    'Keyword',
    'Popup',
    function($scope, $mdDialog, Keyword, Popup){
        $scope.new;
        $scope.keywords = [];

        Keyword.all().then(function(data){
            $scope.keywords = data.data.results;
            console.log($scope.keywords);
        }, function(e){
            Popup.showError('there is an error, please try again.');
        });

        $scope.add = function(){
            var confirm = $mdDialog.prompt()
                          .title('Add a new Keyword')
                          .placeholder('new keyword')
                          .ariaLabel('new keyword')
                          .ok('Add')
                          .cancel('Cancel');

            $mdDialog.show(confirm).then(function(result) {
                Keyword.add(result).then(function(data){
                    $scope.keywords.push({'content': result});
                }, function(e){
                    Popup.showError('there is an error, please try again.');
                });
            }, function() {
                // nothing to do
            });
        };

        $scope.remove = function(content, index){
            Keyword.remove(content).then(function(data){
                $scope.keywords.splice(index, 1);
            }, function(e){
                Popup.showError('there is an error, please try again.');
            });
        };
    }
]);
