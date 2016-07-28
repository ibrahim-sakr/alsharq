alsharq.controller('WebsitesController', [
    '$scope',
    '$window',
    '$location',
    'Website',
    'Popup',
    '$mdToast',
    'Admob',
    function($scope, $window, $location, Website, Popup, $mdToast, Admob){
        Admob.show();
        $scope.websites = [];
        $scope.count = 1;

        $scope.load = function(){
            Website.all($scope.count).then(function(data){
                if (data.data.results) {
                    $scope.websites = $scope.websites.concat(data.data.results);
                    $scope.count    = $scope.count + 1;
                } else {
                    $mdToast.show(
                        $mdToast.simple()
                        .textContent('لا يوجد المزيد!!.')
                        .hideDelay(3000)
                    );
                }
            }, function(e){
                Popup.showError('حدث خطأ اثناء التحميل, حاول مرة أخرى.');
            });
        }
        
        $scope.load();

        $scope.next = function(id){
            $location.path('/categories-writers/' + id);
        };
    }
]);
