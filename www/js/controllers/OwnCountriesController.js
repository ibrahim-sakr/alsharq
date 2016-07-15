alsharq.controller('OwnCountriesController', [
    '$scope',
    'Country',
    'Popup',
    function($scope, Country, Popup){
        $scope.countries = [];
        $scope.myCountries = [];
        
        Country.own().then(function(data){
            $scope.myCountries = data.results.map(function($n){
                return $n.id;
            });

            Country.all().then(function(all){
                for (var i = 0; i < all.results.length; i++) {
                    if ( $scope.myCountries.indexOf( all.results[i].id ) > -1 ) {
                        $scope.countries.concat( all.results[i] );
                    }
                }
            }, function(e){
                Popup.showError('there is an error, please try again.');
            });

        }, function(e){
            Popup.showError('there is an error, please try again.');
        });

        $scope.add = function(id, index){
            Country.add(id).then(function(data){
                $scope.countries[index].own = true;
            }, function(e){
                Popup.showError('there is an error, please try again.');
            });
        };

        $scope.remove = function(id, index){
            Country.remove(id).then(function(data){
                $scope.countries[index].own = false;
            }, function(e){
                Popup.showError('there is an error, please try again.');
            });
        };
    }
]);
