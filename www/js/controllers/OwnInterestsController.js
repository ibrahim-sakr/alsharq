alsharq.controller('OwnInterestsController', [
    '$scope',
    'Interest',
    function($scope, Interest){
        $scope.interests = [
            {
                "id": 1,
                "name": "Jordan1",
                "subscribed": "jo",
            },
            {
                "id": 2,
                "name": "Jordan2",
                "subscribed": "jo",
            },
            {
                "id": 3,
                "name": "Jordan3",
                "subscribed": "jo",
            },
            {
                "id": 4,
                "name": "Jordan4",
                "subscribed": "jo",
            },
            {
                "id": 5,
                "name": "Jordan5",
                "subscribed": "jo",
            },
        ];
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

        $scope.toggle = function(id){
            if ($scope.myInterests[id]) {
                Interest.remove(id).then(function(data){
                    $scope.myInterests[id] = false;
                }, function(e){
                    Popup.showError('there is an error, please try again.');
                });
            } else {
                Interest.add(id).then(function(data){
                    $scope.myInterests[id] = true;
                }, function(e){
                    Popup.showError('there is an error, please try again.');
                });
            }
        };
    }
]);
