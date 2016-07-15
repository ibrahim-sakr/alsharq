alsharq.service('Popup', [
    '$mdToast', 
    function($mdToast){
        this.showError = function(m){
            $mdToast.show(
                $mdToast.simple()
                .textContent(m)
                .hideDelay(3000)
            );
        };
    }
]);
