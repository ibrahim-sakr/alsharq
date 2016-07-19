alsharq.controller('OwnKeywordsController', [
    '$scope',
    '$mdDialog',
    'Keyword',
    'Popup',
    function($scope, $mdDialog, Keyword, Popup){
        $scope.new;
        $scope.keywords = [
            {
                "content": "test",
                "id": 1
            },
            {
                "content": "test2",
                "id": 2
            },
            {
                "content": "test3",
                "id": 3
            },
            {
                "content": "test4",
                "id": 4
            }
        ];

        // Keyword.all().then(function(data){
        //     $scope.keywords = data.results;
        // }, function(e){
        //     Popup.showError('there is an error, please try again.');
        // });

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
