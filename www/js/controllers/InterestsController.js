alsharq.controller('InterestsController', [
    '$scope',
    'Interest',
    'Popup',
    function($scope, Interest, Popup){
        $scope.interests = [];

        Interest.all().then(function(data){
            $scope.interests = data.results;
            console.log($scope.interests);
        }, function(e){
            Popup.showError('حدث خطأ اثناء التحميل, حاول مرة أخرى.');
        });

        $scope.add = function(id, index){
            Interest.add(id).then(function(data){
                $scope.interests[index].own = true;
            }, function(e){
                Popup.showError('حدث خطأ اثناء التحميل, حاول مرة أخرى.');
            });
        };

        $scope.remove = function(id, index){
            Interest.remove(id).then(function(data){
                $scope.interests[index].own = false;
            }, function(e){
                Popup.showError('حدث خطأ اثناء التحميل, حاول مرة أخرى.');
            });
        };

        $scope.next = function(){
            $location.path('/home');
        };
    }
]);
