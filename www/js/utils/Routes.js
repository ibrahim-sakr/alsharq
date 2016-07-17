alsharq.config([
    '$routeProvider',
    function($routeProvider){
        $routeProvider
        .when('/home', {
            templateUrl: "views/home.html",
            controller: "HomeController"
        })

        .when('/auth', {
            templateUrl: "views/auth/auth.html",
            controller: "AuthController"
        })

        .when('/auth/register', {
            templateUrl: "views/auth/register.html",
            controller: "RegisterController"
        })

        .when('/auth/login', {
            templateUrl: "views/auth/login.html",
            controller: "LoginController"
        })

        .when('/auth/reset', {
            templateUrl: "views/auth/reset.html",
            controller: "ResetPasswordController"
        })

        .when('/profile', {
            templateUrl: "views/auth/profile.html",
            controller: "ProfileController"
        })

        .when('/websites', {
            templateUrl: "views/websites.html",
            controller: "WebsitesController"
        })

        .when('/categories-writers/:id', { // id of the website
            templateUrl: "views/categories-writers.html",
            controller: "CatsWritersController"
        })

        .when('/my-subscriptions', {
            templateUrl: "views/auth/my-subscriptions.html",
            controller: "OwnSubscriptionssController"
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

        .when('/countries', {
            templateUrl: "views/countries.html",
            controller: "CountriesController"
        })

        .when('/interests', {
            templateUrl: "views/interests.html",
            controller: "InterestsController"
        })

        .when('/contact', {
            templateUrl: "views/contact.html",
            controller: "ContactController"
        })

        .when('/article/:id', {
            templateUrl: "views/article.html",
            controller: "ArticleController"
        })

        .otherwise('/home');
    }
]);
