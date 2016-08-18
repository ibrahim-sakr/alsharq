alsharq.controller('CountriesController', [
    '$scope',
    'Country',
    'Popup',
    'Admob',
    function($scope, Country, Popup, Admob){
        Admob.show();
        $scope.countries = [];
        $scope.count = 1;

        function load() {
            Country.all($scope.count).then(function(data){
                $scope.countries = $scope.countries.concat(data.results);
            }, function(e){
                Popup.showError('حدث خطأ اثناء التحميل, حاول مرة أخرى.');
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
                Popup.showError('حدث خطأ اثناء التحميل, حاول مرة أخرى.');
            });
        };

        $scope.remove = function(id, index){
            Country.remove(id).then(function(data){
                $scope.countries[index].own = false;
            }, function(e){
                Popup.showError('حدث خطأ اثناء التحميل, حاول مرة أخرى.');
            });
        };

        $scope.next = function(){
            $location.path('/interests');
        };
    }
]);