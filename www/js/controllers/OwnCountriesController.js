alsharq.controller('OwnCountriesController', [
    '$scope',
    'Country',
    'Popup',
    function($scope, Country, Popup){
        $scope.countries = [];
        // $scope.myCountries = {};

        // Country.all().then(function(all){
        //     $scope.countries = all.data.results;
        //     Country.own().then(function(own){
        //         console.log(own.data.results);
        //         for (var i = 0; i < own.data.results.length; i++) {
        //             $scope.myCountries[ own.data.results[i].id ] = true;
        //         }
        //     }, function(e){
        //         Popup.showError('there is an error, please try again.');
        //     });
        // }, function(e){
        //     Popup.showError('there is an error, please try again.');
        // });

        Country.own().then(function(own){
            $scope.countries = own.data.results;
        }, function(e){
            Popup.showError('there is an error, please try again.');
        });

        $scope.toggle = function($index, id){
            if ($scope.countries[$index].subscribed) {
                Country.remove(id).then(function(data){
                    $scope.countries[$index].subscribed = false;
                }, function(e){
                    Popup.showError('there is an error, please try again.');
                });
            } else {
                Country.add(id).then(function(data){
                    $scope.countries[$index].subscribed = true;
                }, function(e){
                    Popup.showError('there is an error, please try again.');
                });
            }
        };
    }
]);
