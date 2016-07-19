alsharq.controller('OwnCountriesController', [
    '$scope',
    'Country',
    'Popup',
    function($scope, Country, Popup){
        $scope.countries = [
            {
                "code": "jo1",
                "id": 1,
                "name": "Jordan1"
            },
            {
                "code": "jo2",
                "id": 2,
                "name": "Jordan2"
            },
            {
                "code": "jo3",
                "id": 3,
                "name": "Jordan3"
            },
            {
                "code": "jo4",
                "id": 4,
                "name": "Jordan4"
            },
            {
                "code": "jo5",
                "id": 5,
                "name": "Jordan5"
            },
        ];
        $scope.myCountries = {};

        // Country.all().then(function(all){
        //     $scope.countries = all.results;
        //     Country.own().then(function(data){
        //         for (var i = 0; i < data.results.length; i++) {
        //             $scope.myCountries[ data.results[i].id ] = true;
        //         }
        //     }, function(e){
        //         Popup.showError('there is an error, please try again.');
        //     });
        // }, function(e){
        //     Popup.showError('there is an error, please try again.');
        // });
        

        $scope.toggle = function(id){
            if ($scope.myCountries[id]) {
                Country.remove(id).then(function(data){
                    $scope.myCountries[id] = false;
                }, function(e){
                    Popup.showError('there is an error, please try again.');
                });
            } else {
                Country.add(id).then(function(data){
                    $scope.myCountries[id] = true;
                }, function(e){
                    Popup.showError('there is an error, please try again.');
                });
            }
        };
    }
]);
