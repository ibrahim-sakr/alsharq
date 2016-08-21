alsharq.service('Popup', [
    '$mdToast', 
    function($mdToast){
        this.showError = function(m, t){
            $mdToast.show(
                $mdToast.simple()
                .textContent(m)
                .hideDelay(t || 3000)
            );
        };
    }
]);
