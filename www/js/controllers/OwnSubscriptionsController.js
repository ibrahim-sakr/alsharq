alsharq.controller('OwnSubscriptionsController', [
    '$scope',
    '$mdBottomSheet',
    'Subscription',
    'Popup',
    'Admob',
    function($scope, $mdBottomSheet, Subscription, Popup, Admob){
        Admob.show();
        
        $scope.subscriptions = [];
        $scope.count = 1;
        $scope.isMore = true;

        $scope.load = function(){
            Subscription.all($scope.count).then(function(data){
                $scope.count++;
                $scope.subscriptions = $scope.subscriptions.concat(data.data.results);
                if (data.data.results.length < 10) $scope.isMore = false;
            }, function(e){
                Popup.showError('حدث خطأ اثناء التحميل, حاول مرة أخرى.');
            });
        };
        $scope.load();

        $scope.edit = function(object, $index) {
            $mdBottomSheet.show({
                templateUrl: 'views/partials/bottom-sheet-subscription-template.html',
                controller: 'EditSubscriptionController',
                locals: {
                    object: object
                }
            }).then(function(action){
                if (action == 'remove') {
                    Popup.showError('تم الغاء الاشتراك.');
                    $scope.subscriptions.splice($index, 1);
                }
                if (action == "notify") {
                    $scope.subscriptions[$index].is_subscribed = !$scope.subscriptions[$index].is_subscribed;
                }
                if (action == "error") {
                    Popup.showError('جدث خطأ, من فضلك اعد المحاولة.');
                }
            });
        };
    }
]);
