alsharq.controller('WebsitesController', [
    '$scope',
    '$location',
    'Website',
    'Popup',
    function($scope, $location, Website, Popup){
        $scope.websites = [
            {
                "id": 1,
                "name": "Jordan",
                "image": {
                    "caption": "asdas",
                    "file": "http://192.168.0.10:8080/media/images/2016/06/18/image.gif",
                    "height": 300,
                    "width": 200
                }
            },
            {
                "id": 2,
                "name": "Jordan",
                "image": {
                    "caption": "asdas",
                    "file": "http://192.168.0.10:8080/media/images/2016/06/18/image.gif",
                    "height": 300,
                    "width": 200
                }
            },
            {
                "id": 3,
                "name": "Jordan",
                "image": {
                    "caption": "asdas",
                    "file": "http://192.168.0.10:8080/media/images/2016/06/18/image.gif",
                    "height": 300,
                    "width": 200
                }
            },
            {
                "id": 4,
                "name": "Jordan",
                "image": {
                    "caption": "asdas",
                    "file": "http://192.168.0.10:8080/media/images/2016/06/18/image.gif",
                    "height": 300,
                    "width": 200
                }
            },
        ];

        // Website.all().then(function(data){
        //     $scope.websites = data.results;
        // }, function(e){
        //     Popup.showError('there is an error, please try again.');
        // });


        $scope.next = function(id){
            $location.path('/categories-writers/' + id);
        };
    }
]);
