alsharq.controller('InterestsController', [
    '$scope',
    'Interest',
    'Popup',
    function($scope, Interest, Popup){
        $scope.interests = [];

        Interest.all().then(function(data){
            $scope.interests = data.results;
        }, function(e){
            Popup.showError('there is an error, please try again.');
        });

        $scope.add = function(id, index){
            Interest.add(id).then(function(data){
                $scope.interests[index].own = true;
            }, function(e){
                Popup.showError('there is an error, please try again.');
            });
        };

        $scope.remove = function(id, index){
            Interest.remove(id).then(function(data){
                $scope.interests[index].own = false;
            }, function(e){
                Popup.showError('there is an error, please try again.');
            });
        };

        $scope.next = function(){
            $location.path('/home');
        };
    }
]);
