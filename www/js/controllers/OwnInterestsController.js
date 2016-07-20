alsharq.controller('OwnInterestsController', [
    '$scope',
    'Interest',
    'Popup',
    function($scope, Interest, Popup){
        $scope.interests = [];
        $scope.myInterests = [];

        // Interest.all().then(function(all){
        //     $scope.interests = all.results;
        //     Interest.own().then(function(data){
        //         for (var i = 0; i < data.results.length; i++) {
        //             $scope.myInterests[ data.results[i].id ] = true;
        //         }
        //     }, function(e){
        //         Popup.showError('there is an error, please try again.');
        //     });
        // }, function(e){
        //     Popup.showError('there is an error, please try again.');
        // });

        Interest.own().then(function(own){
            $scope.interests = own.data.results;
        }, function(e){
            Popup.showError('there is an error, please try again.');
        });        

        $scope.toggle = function($index, id){
            if ($scope.interests[$index].subscribed) {
                Interest.remove(id).then(function(data){
                    $scope.interests[$index].subscribed = false;
                }, function(e){
                    Popup.showError('there is an error, please try again.');
                });
            } else {
                Interest.add(id).then(function(data){
                    $scope.interests[$index].subscribed = true;
                }, function(e){
                    Popup.showError('there is an error, please try again.');
                });
            }
        };
    }
]);
