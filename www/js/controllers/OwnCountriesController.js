alsharq.controller('OwnCountriesController', [
    '$scope',
    'Country',
    'Popup',
    'Admob',
    function($scope, Country, Popup, Admob){
        Admob.show();
        $scope.countries = [];
        // $scope.myCountries = {};

        Country.own().then(function(own){
            $scope.countries = own.data.results;
        }, function(e){
            Popup.showError('حدث خطأ اثناء التحميل, حاول مرة أخرى.');
        });

        $scope.toggle = function($index, id){
            if ($scope.countries[$index].subscribed) {
                Country.remove(id).then(function(data){
                    $scope.countries[$index].subscribed = false;
                    $scope.$parent.loadSortcutSidebar();
                }, function(e){
                    Popup.showError('حدث خطأ اثناء التحميل, حاول مرة أخرى.');
                });
            } else {
                Country.add(id).then(function(data){
                    $scope.countries[$index].subscribed = true;
                    $scope.$parent.loadSortcutSidebar();
                }, function(e){
                    Popup.showError('حدث خطأ اثناء التحميل, حاول مرة أخرى.');
                });
            }
        };
    }
]);
