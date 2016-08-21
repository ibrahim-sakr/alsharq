alsharq.controller('ProfileController', [
    '$scope',
    'Storage',
    'Queue',
    'Popup',
    'API',
    '$location',
    'Admob',
    '$http',
    function($scope, Storage, Queue, Popup, API, $location, Admob, $http){
        // Admob.show();

        $scope.$user = $scope.$parent.$user();

        $scope.profile_pic;
        $scope.saveProfile = function(){
            if ($scope.$user.password != $scope.$user.password_confirmation) {
                Popup.showError("كلمة المرور غير متطابقة!"); return;
            }
            if (!$scope.$user.full_name || !$scope.$user.email) {
                Popup.showError('يجب تعبئة جميع الحقول'); return;
            };

            var payload = new FormData();
                payload.append("full_name", $scope.$user.full_name);
                payload.append("email", $scope.$user.email);

            if( $scope.$user.password ) payload.append("password", $scope.$user.password);
            if( $scope.profile_pic ) payload.append("profile_pic", $scope.profile_pic);

            $http({
                method: "POST",
                url: API.PROFILE,
                data: payload,
                headers: {"Content-Type": undefined},
                transformRequest: angular.identity
            }).then(function(data){
                data.data.full_name = data.data.first_name + " " + data.data.last_name;
                $scope.$user = data.data;
                Storage.set('user', JSON.stringify($scope.$user));
                $location.path('/home');
                Popup.showError('تم تحديث الملف الشخصي');
            }, function(e){
                console.log(e);
            });
        };
    }
]);
