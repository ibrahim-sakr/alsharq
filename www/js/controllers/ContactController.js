alsharq.controller('ContactController', [
    '$scope',
    'Contact',
    'Popup',
    '$location',
    '$mdToast',
    'Storage',
    'Admob',
    function($scope, Contact, Popup, $location, $mdToast, Storage, Admob){
        Admob.show();
        var $user = JSON.parse( Storage.get('user') );
        $scope.contact = {
            name: $user.first_name +" "+ $user.last_name,
            email: $user.email,
        };

        $scope.send = function(){
            Contact.send($scope.contact).then(function(data){
                $location.path('/home');
                $mdToast.show(
                    $mdToast.simple()
                    .textContent('تم ارسال الرسالة.')
                    .hideDelay(3000)
                );
            }, function(e){
                Popup.showError('حدث خطأ اثناء التحميل, حاول مرة أخرى.');
            });
        };
    }
]);



