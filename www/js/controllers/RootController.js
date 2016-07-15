alsharq.controller('RootController', [
    '$scope',
    '$location',
    '$mdSidenav',
    'Subscription',
    'Queue',
    'Popup',
    function($scope, $location, $mdSidenav, Subscription, Queue, Popup){
        $scope.shortcutSidebarContent = {};

        /**
         * for testing Only
        /*******************************************************************************************************/
            $scope.goTo = function(page){ $location.path('/' + page); $scope.closeSidebar('mainSidebar') };
        /*******************************************************************************************************/

        /**
         * fires after all angular modules loaded.
         * it's like afterLoaded event.
         */
        $scope.appReady = function(){
            window.Loading.hide();
            console.log('app loaded');
        };

        $scope.back = function(){
            history.back();
        };

        $scope.openSidebar = function(id){
            if ($scope.currentPage != 'auth') {
                var sidebars = ['mainSidebar', 'shortcutSidebar'];
                sidebars.splice( sidebars.indexOf(id) , 1);
                $mdSidenav(sidebars[0]).close();
                $mdSidenav(id).open();
            }
        };

        $scope.closeSidebar = function(id){
            if ($scope.currentPage != 'auth') $mdSidenav(id).close();
        };

        $scope.logout = function(){
            var logoutOptions = {
                'model': 'Auth',
                'method': 'logout',
                'data': '',
                'success': function(){
                    Storage.remove(['token', 'user']);
                    // redirect to login page
                    $location.path('/auth');
                },
                'error': function(e){
                    // show error message
                    Popup.showError('there is an error, please try again.');
                }
            };
            // start dequeuing
            Queue.enqueue(logoutOptions);

        };

        $scope.exit = function(){
            if (env == "production") navigator.app.exitApp();
            if (env == "development") console.log('closing app');
        };

        Subscription.filter().then(function(data){
            $scope.shortcutSidebarContent = data;
        }, function(e){
            Popup.showError('there is an error, please try again.');
        });
    }
]);
