alsharq.controller('CountriesController', [
    '$scope',
    'Country',
    'Popup',
    function($scope, Country, Popup){
        $scope.countries = [];

        Country.all().then(function(data){
            $scope.countries = data.results;
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

        $scope.next = function(){
            $location.path('/interests');
        };
    }
]);
