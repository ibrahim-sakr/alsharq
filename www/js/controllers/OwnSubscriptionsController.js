alsharq.controller('OwnSubscriptionsController', [
    '$scope',
    '$mdBottomSheet',
    'Subscription',
    'Popup',
    function($scope, $mdBottomSheet, Subscription, Popup){
        $scope.subscriptions = [];
        $scope.count = 1;

        $scope.load = function(){
            Subscription.all($scope.count).then(function(data){
                $scope.count++;
                $scope.subscriptions = $scope.subscriptions.concat(data.data.results);
            }, function(e){
                Popup.showError('حدث خطأ اثناء التحميل, حاول مرة أخرى.');
            });
        };
        $scope.load();

        $scope.edit = function(id, noti, $index) {
            $mdBottomSheet.show({
                templateUrl: 'views/partials/bottom-sheet-subscription-template.html',
                controller: 'EditSubscriptionController',
                locals: {
                    id: id,
                    noti: noti
                }
            }).then(function(action){
                if (action == 'remove') {
                    $scope.subscriptions.splice($index, 1);
                }
            });
        };
    }
]);
