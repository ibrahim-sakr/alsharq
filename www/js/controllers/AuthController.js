alsharq.controller('AuthController', [
    '$scope',
    '$cordovaOauth',
    'Storage',
    '$location',
    'Popup',
    'Queue',
    '$http',
    'Auth',
    'Admob',
    function($scope, $cordovaOauth, Storage, $location, Popup, Queue, $http, Auth, Admob){
        Admob.hide();
        $scope.googleplus = function(){
            var CLIENT_ID = "182420195836-uuf0dl3ph4ebi42spnupqgh4nk81c3mi.apps.googleusercontent.com";
            $cordovaOauth.google(CLIENT_ID, ["email"], {
                redirect_uri:  "http://localhost/callback"
            }).then(function(result) {
                $http.get("https://www.googleapis.com/plus/v1/people/me", {
                    params: {
                        access_token: result.access_token
                    }
                }).then(function(data){
                    var options = {
                        email        : data.data.emails[0].value,
                        google_token : result.access_token,
                    };
                    Auth.social(options).then(function(data){
                        data.data.user.full_name = data.data.user.first_name + " " + data.data.user.last_name;
                        Storage.set({
                            'token': data.data.token,
                            'user': JSON.stringify(data.data.user)
                        });
                        $location.path('/home');
                    }, function(e){
                        Popup.showError('حدث خطأ اثناء التحميل, حاول مرة أخرى.');
                    });
                }, function(e){
                    console.log(e);
                });
            }, function(e) {
                console.log(e);
            });
        };

        $scope.facebook = function(){
            $cordovaOauth.facebook("316004812072491", ["email"], {redirect_uri: "http://localhost/callback"}).then(function(result){
                $http.get("https://graph.facebook.com/v2.2/me", {
                    params: {
                        access_token: result.access_token,
                        fields: "email",
                        format: "json"
                    }
                }).then(function(data) {
                    var options = {
                        email        : data.data.email,
                        google_token : result.access_token,
                    };
                    Auth.social(options).then(function(data){
                        data.data.user.full_name = data.data.user.first_name + " " + data.data.user.last_name;
                        Storage.set({
                            'token': data.data.token,
                            'user': JSON.stringify(data.data.user)
                        });
                        $location.path('/home');
                    }, function(e){
                        Popup.showError('حدث خطأ اثناء التحميل, حاول مرة أخرى.');
                    });
                }, function(e) {
                    console.log(e);
                });
            }, function(e){
                    console.log(e);
            });
        };

        $scope.guest = function(){
            var loginOptions = {
                'model': 'Auth',
                'method': 'loginGuest',
                'data': Storage.get('uuid'),
                'success': function(data){
                    // edit user object to add full_name
                    data.user.full_name = data.user.first_name + " " + data.user.last_name;

                    Storage.set({
                        'token': data.token,
                        'user': JSON.stringify(data.user)
                    });
                    $location.path('/home');
                },
                'error': function(e){
                    Popup.showError('حدث خطأ اثناء التحميل, حاول مرة أخرى.');
                }
            };
            // start dequeuing
            Queue.enqueue(loginOptions);
        };
    }
]);
