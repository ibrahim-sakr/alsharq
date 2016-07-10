// global var for setting the env
window.env = "development"; // production


var App = {
    init: function(){
        if (env == 'production') this.bindEvents();
        if (env == 'development') {
            this.onDeviceReady();
        }
    },

    // Bind Event Listeners
    //
    // Bind any events that are required on startup.
    // read more https://cordova.apache.org/docs/en/5.4.0/cordova/events/events.html
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady,   false);
        // document.addEventListener("offline",     this.onDeviceOffline, false);
        document.addEventListener("online",      this.onDeviceOnline,  false);
        document.addEventListener("resume",      this.onResume,        false);
        // document.addEventListener("pause",       this.onPause,         false);
    },

    // offline Event Hamdler
    // fires whene the app goes offline
    onDeviceOffline: function(){
        if (env == "production") navigator.app.exitApp();
        if (env == "development") console.log('no Internet Connection .. closing app ....');
    },

    // online Event Hamdler
    // fires whene the app back to online
    onDeviceOnline: function(){
        if (env == "production") location.reload();
        if (env == "development") console.log('the app back to online.. restore functionality...');
    },

    onResume: function(){
        if (env == "production") location.reload();
        if (env == "development") console.log('the app resumed...');
    },

    onPause: function(){
        if (env == "production") navigator.app.exitApp();
        if (env == "development") console.log('no Internet Connection .. closing app ....');
    },

    /**
     * Device Ready Handler
     */
    onDeviceReady: function(){
        var alsharq = angular.module('AlSharq', [
            'ngResource',
            'ngRoute',
            'ngMaterial',
        ]);
        angular.bootstrap(document, ['AlSharq']);
    }
};

// Let's Rock nRole !!??!!
App.init();


