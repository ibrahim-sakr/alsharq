alsharq.controller('OwnKeywordsController', [
    '$scope',
    '$mdDialog',
    'Keyword',
    'Popup',
    function($scope, $mdDialog, Keyword, Popup){
        $scope.keywords = [];
        $scope.new;

        Keyword.all().then(function(data){
            $scope.keywords = data.results;
        }, function(e){
            Popup.showError('there is an error, please try again.');
        });

        $scope.add = function(){
            var confirm = $mdDialog.prompt()
                          .title('Add a new Keyword')
                          // .textContent('Bowser is a common name.')
                          .placeholder('new keyword')
                          .ariaLabel('new keyword')
                          // .initialValue('')
                          .targetEvent(ev)
                          .ok('Add')
                          .cancel('Cancel');
            
            $mdDialog.show(confirm).then(function(result) {
                console.log(result);
                // Keyword.add(content).then(function(data){
                //     $scope.keywords.splice(index, 1);
                // }, function(e){
                //     Popup.showError('there is an error, please try again.');
                // });
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
