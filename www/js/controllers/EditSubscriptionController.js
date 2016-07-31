alsharq.controller('EditSubscriptionController', [
    '$scope',
    '$mdBottomSheet',
    'Feed',
    '$location',
    'object',
    function($scope, $mdBottomSheet, Feed, $location, object){
        console.log(object);
        $scope.remove = function(){
            Feed.subscribe(object.id).then(function(data){
                hide('remove');
            }, function(e){
                hide('error');
            });
        };

        $scope.open = function(){
            hide();
            $location.url('/feeds?category=' + object.id);
        };

        $scope.notificaton = function(){
            Feed.notify(object.id).then(function(data){
                hide('notify');
            }, function(e){
                hide('error');
            });
        };

        function hide(action){
            $mdBottomSheet.hide(action);
        }
    }
]);
