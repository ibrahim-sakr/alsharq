alsharq.controller('EditSubscriptionController', [
    '$scope',
    '$mdBottomSheet',
    'id',
    'noti',
    function($scope, $mdBottomSheet, id, noti){
        $scope.remove = function(){
            console.log("remove " + id);
            hide('hello remove');
        };
        $scope.open = function(){
            console.log("open " + id);
            hide('hello open');
        };
        $scope.notificaton = function(){
            console.log("notificaton " + id);
            hide('hello noti');
        };
        function hide(m){
            $mdBottomSheet.hide(m);
        }
    }
]);
