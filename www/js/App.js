// global var for setting the env
window.env = "development"; // production
// window.env = "production";  // development

var alsharq = angular.module('AlSharq', [
    'ionic',
    'ngRoute',
    'ngMaterial',
    'ngCordovaOauth',
    'admobModule',
    'ngFileUpload',
]);

var App = {
    init: function(){
        this.bindEvents();
        // this.onDeviceReady();
    },

    // Bind Event Listeners
    //
    // Bind any events that are required on startup.
    // read more https://cordova.apache.org/docs/en/5.4.0/cordova/events/events.html
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        // document.addEventListener("offline",     this.onDeviceOffline, false);
        // document.addEventListener("online",      this.onDeviceOnline,  false);
        // document.addEventListener("resume",      this.onResume,        false);
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
        if ( window.App.isFirstRun() ) {
            window.App.firstRun();
        };
        angular.element(document).ready(function() {
            angular.bootstrap(document, ['AlSharq']);
        });
    },

    /**
     * check if the app first run
     * 
     * @return Boolean
     */
    isFirstRun: function(){
        // check if there is a value in LocalStorage with the key uuid
        var uuid = window.localStorage.getItem("uuid");
        if (uuid != true) {
            return true;
        } else {
            return false;
        }
    },

    firstRun: function(){
        // get the UUID
        var uuid;

        if (window.device && window.device.uuid) {
            uuid = window.device.uuid;
        } else {
            uuid = "random string";
        }

        // save it into localStorage
        window.localStorage.setItem("uuid", uuid);
    }
};

// Let's Rock nRole !!??!!
App.init();
