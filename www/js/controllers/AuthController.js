alsharq.controller('AuthController', [
    '$scope',
    '$cordovaOauth',
    function($scope, $cordovaOauth){
        

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
    }
]);
