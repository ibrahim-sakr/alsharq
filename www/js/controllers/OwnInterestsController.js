alsharq.controller('OwnInterestsController', [
    '$scope',
    'Interest',
    function($scope, Interest){
        $scope.interests = [];
        $scope.myInterests = [];
        
        Interest.own().then(function(data){
            $scope.myInterests = data.results.map(function($n){
                return $n.id;
            });

            Interest.all().then(function(all){
                for (var i = 0; i < all.results.length; i++) {
                    if ( $scope.myInterests.indexOf( all.results[i].id ) > -1 ) {
                        $scope.interests.concat( all.results[i] );
                    }
                }
            }, function(e){
                Popup.showError('there is an error, please try again.');
            });

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
    }
]);
