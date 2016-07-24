alsharq.controller('OwnCountriesController', [
    '$scope',
    'Country',
    'Popup',
    function($scope, Country, Popup){
        $scope.countries = [];
        // $scope.myCountries = {};

        Country.own().then(function(own){
            $scope.countries = own.data.results;
        }, function(e){
            Popup.showError('there is an error, please try again.');
        });

        $scope.toggle = function($index, id){
            if ($scope.countries[$index].subscribed) {
                Country.remove(id).then(function(data){
                    $scope.countries[$index].subscribed = false;
                    $scope.$parent.loadSortcutSidebar();
                }, function(e){
                    Popup.showError('there is an error, please try again.');
                });
            } else {
                Country.add(id).then(function(data){
                    $scope.countries[$index].subscribed = true;
                    $scope.$parent.loadSortcutSidebar();
                }, function(e){
                    Popup.showError('there is an error, please try again.');
                });
            }
        };
    }
]);
