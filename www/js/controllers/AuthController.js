alsharq.controller('AuthController', [
    '$scope',
    '$cordovaOauth',
    'Storage',
    '$location',
    'Popup',
    'Queue',
    '$http',
    function($scope, $cordovaOauth, Storage, $location, Popup, Queue, $http){

        $scope.googleplus = function(){
            var CLIENT_ID = "182420195836-uuf0dl3ph4ebi42spnupqgh4nk81c3mi.apps.googleusercontent.com";
            $cordovaOauth.google(CLIENT_ID, ["email", "profile"], {
                redirect_uri:  "http://localhost/callback"
            }).then(function(result) {
                console.log(result);
                // email
                // password
                // google_token
            }, function(e) {
                console.log(e);
            });
        };

        $scope.facebook = function(){
            $cordovaOauth.facebook("316004812072491", ["email", "public_profile"], {redirect_uri: "http://localhost/callback"}).then(function(result){
                console.log(result);
                $http.get("https://graph.facebook.com/v2.2/me", {
                    params: {
                        access_token: result.access_token,
                        fields: "name,gender,location,picture",
                        format: "json"
                    }
                }).then(function(result) {
                    console.log(result);
                    $location.path('/home');
                }, function(error) {
                    alert("Error: " + error);
                });
            },  function(error){
                    alert("Error: " + error);
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
