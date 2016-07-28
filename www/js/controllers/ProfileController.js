alsharq.controller('ProfileController', [
    '$scope',
    'Storage',
    'Queue',
    'Popup',
    '$mdToast',
    'API',
    'Upload',
    '$location',
    'Admob',
    'Request',
    '$http',
    function($scope, Storage, Queue, Popup, $mdToast, API, Upload, $location, Admob, Request, $http){
        Admob.show();
        
        $scope.$user = JSON.parse( Storage.get('user') );

        console.log($scope.$user);

        $scope.update = function(){
            console.log('submitting the form...');
            console.log($scope.$user);
            delete $scope.$user.profile_pic;

            $http({
                method: "post",
                url: API.PROFILE,
                transformRequest: Request.transform(),
                data: $scope.$user
            }).then(function(data){
                console.log(data);
            }, function(e){
                console.log(e);
            });
        };
        



        // $scope.update = function() {
            // if ($scope.$user.password != $scope.$user.password_confirmation) {
            //     $mdToast.show(
            //         $mdToast.simple()
            //         .textContent('كلمة المرور غير متطابقة!')
            //         .hideDelay(3000)
            //     );
            //     return;
            // }
            // if (!$scope.$user.full_name || !$scope.$user.email) {
            //     $mdToast.show(
            //         $mdToast.simple()
            //         .textContent('يجب تعبئة جميع الحقول')
            //         .hideDelay(3000)
            //     );
            //     return;
            // };

            // delete $scope.$user.password_confirmation;
            // if (!$scope.$user.profile_pic) delete $scope.$user.profile_pic;

            // $scope.$user.profile_pic.upload = Upload.upload({
            //     method: 'POST',
            //     url: API.PROFILE,
            //     data: $scope.$user,
            // });

            // $scope.$user.profile_pic.upload.then(function (response) {
            //     console.log(response.data);
            // //     // response.data.full_name = response.data.first_name + " " + response.data.last_name;
            // //     // Storage.set('user', JSON.stringify(response.data));
            // //     // $location.path('/home');
            // }, function (e) {
            //     console.log(e);
            // //     Popup.showError('حدث خطأ اثناء التحميل, حاول مرة أخرى.');
            // }, function (evt) {
            // //     // Math.min is to fix IE which reports 200% sometimes
            // //     $scope.$user.profile_pic.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
            // });
        // }
    }
]);
