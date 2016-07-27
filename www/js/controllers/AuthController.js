alsharq.controller('AuthController', [
    '$scope',
    '$cordovaOauth',
    'Storage',
    '$location',
    'Popup',
    'Queue',
    function($scope, $cordovaOauth, Storage, $location, Popup, Queue){

        $scope.googleplus = function(){
            $cordovaOauth.google("CLIENT_ID_HERE", ["email", "public_profile"], {redirect_uri: "http://localhost/callback"}).then(function(result) {
                console.log("Response Object -> " + JSON.stringify(result));
            }, function(error) {
                console.log("Error -> " + error);
            });
        };

        $scope.facebook = function(){
            $cordovaOauth.facebook("1633195863589792", ["email", "public_profile"], {redirect_uri: "http://localhost/callback"}).then(function(result){
                console.log(result);
                // $http.get("https://graph.facebook.com/v2.2/me", {
                //     params: {
                //         access_token: result.access_token,
                //         fields: "name,gender,location,picture",
                //         format: "json"
                //     }
                // }).then(function(result) {
                //     console.log(result);
                // }, function(error) {
                //     alert("Error: " + error);
                // });
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
