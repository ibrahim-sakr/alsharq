franchise.config([
    '$routeProvider',
    function($routeProvider){
        $routeProvider
        .when('/home', {
            templateUrl: "views/home.html",
            controller: "HomeController"
        })

        // login
        // register
        // facebook
        // google+
        // reset password
        .when('/auth', {
            templateUrl: "views/auth/login.html",
            controller: "AuthController"
        })

        .when('/profile', {
            templateUrl: "views/auth/profile.html",
            controller: "ProfileController"
        })

        .otherwise('/home');
    }
]);
