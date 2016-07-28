alsharq.controller('EditSubscriptionController', [
    '$scope',
    '$mdBottomSheet',
    'Feed',
    '$location',
    '$mdToast',
    'object',
    function($scope, $mdBottomSheet, Feed, $location, $mdToast, object){
        
        $scope.remove = function(){
            Feed.subscribe(object.id).then(function(data){
                hide('remove');
                $mdToast.show(
                    $mdToast.simple()
                    .textContent('تم الغاء الاشتراك.')
                    .hideDelay(3000)
                );
            }, function(e){
                hide('');
                $mdToast.show(
                    $mdToast.simple()
                    .textContent('جدث خطأ, من فضلك اعد المحاولة.')
                    .hideDelay(3000)
                );
            });
        };
        

        $scope.open = function(){
            hide();
            $location.url('/feeds?category=' + object.id);
        };
        
        $scope.notificaton = function(){
            Feed.notify(object.id).then(function(data){
                hide('notify');
            }, function(e){});
        };
        
        function hide(action){
            $mdBottomSheet.hide(action);
        }
    }
]);
