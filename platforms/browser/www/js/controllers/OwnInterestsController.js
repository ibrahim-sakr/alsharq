alsharq.controller('OwnInterestsController', [
    '$scope',
    'Interest',
    'Popup',
    'Admob',
    function($scope, Interest, Popup, Admob){
        Admob.show();
        $scope.interests = [];
        $scope.myInterests = [];

        // Interest.all().then(function(all){
        //     $scope.interests = all.results;
        //     Interest.own().then(function(data){
        //         for (var i = 0; i < data.results.length; i++) {
        //             $scope.myInterests[ data.results[i].id ] = true;
        //         }
        //     }, function(e){
        //         Popup.showError('حدث خطأ اثناء التحميل, حاول مرة أخرى.');
        //     });
        // }, function(e){
        //     Popup.showError('حدث خطأ اثناء التحميل, حاول مرة أخرى.');
        // });

        Interest.own().then(function(own){
            $scope.interests = own.data.results;
        }, function(e){
            Popup.showError('حدث خطأ اثناء التحميل, حاول مرة أخرى.');
        });        

        $scope.toggle = function($index, id){
            if ($scope.interests[$index].subscribed) {
                Interest.remove(id).then(function(data){
                    $scope.interests[$index].subscribed = false;
                }, function(e){
                    Popup.showError('حدث خطأ اثناء التحميل, حاول مرة أخرى.');
                });
            } else {
                Interest.add(id).then(function(data){
                    $scope.interests[$index].subscribed = true;
                }, function(e){
                    Popup.showError('حدث خطأ اثناء التحميل, حاول مرة أخرى.');
                });
            }
        };
    }
]);
