alsharq.controller('EditSubscriptionController', [
    '$scope',
    '$mdBottomSheet',
    'id',
    'Feed',
    '$mdToast',
    'noti',
    function($scope, $mdBottomSheet, id, Feed, $mdToast, noti){
        
        $scope.remove = function(){
            Feed.subscribe(id).then(function(data){
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
            console.log("open " + id);
            hide('open');
        };
        
        $scope.notificaton = function(){
            console.log("notificaton " + id);
            hide('notify');
        };
        
        function hide(action){
            $mdBottomSheet.hide(action);
        }
    }
]);
