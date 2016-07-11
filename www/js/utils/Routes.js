alsharq.config([
    '$routeProvider',
    function($routeProvider){
        $routeProvider
        .when('/home', {
            templateUrl: "views/home.html",
            controller: "HomeController"
        })

        .when('/auth', {
            templateUrl: "views/auth/login.html",
            controller: "AuthController"
        })

        .when('/profile', {
            templateUrl: "views/auth/profile.html",
            controller: "ProfileController"
        })

        .when('/websites', {
            templateUrl: "views/websites.html",
            controller: "WebsitesController"
        })

        .when('/categories-writers', {
            templateUrl: "views/categories-writers.html",
            controller: "CatsWritersController"
        })

        .when('/my-websites', {
            templateUrl: "views/auth/my-websites.html",
            controller: "OwnWebsitesController"
        })

        .when('/my-keywords', {
            templateUrl: "views/auth/my-keywords.html",
            controller: "OwnKeywordsController"
        })

        .when('/my-articles/:prefrence', {
            templateUrl: "views/auth/my-articles.html",
            controller: "OwnArticlesController"
        })

        .when('/my-countries', {
            templateUrl: "views/auth/my-countries.html",
            controller: "OwnCountriesController"
        })

        .when('/my-interests', {
            templateUrl: "views/auth/my-interests.html",
            controller: "OwnInterestsController"
        })

        .otherwise('/home');
    }
]);
