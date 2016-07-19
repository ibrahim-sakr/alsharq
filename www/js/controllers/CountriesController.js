alsharq.controller('CountriesController', [
    '$scope',
    'Country',
    'Popup',
    function($scope, Country, Popup){
        $scope.countries = [];
        $scope.count = 1;

        function load() {
            Country.all($scope.count).then(function(data){
                $scope.countries = $scope.countries.concat(data.results);
            }, function(e){
                Popup.showError('there is an error, please try again.');
            });
        }
        load();

        $scope.more = function(){
            $scope.count++;
            load();
        };

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
