alsharq.controller('OwnSubscriptionsController', [
    '$scope',
    '$mdBottomSheet',
    'Subscription',
    'Popup',
    function($scope, $mdBottomSheet, Subscription, Popup){
        $scope.subscriptions = [
            {
                "id": 1,
                "title": "Jordan",
                "is_subscribed": "jo",
                "type": "jo",
                "website": {
                    "id": 1,
                    "name": "Khaberni",
                    "image": {
                        "caption": "asdas",
                        "file": "http://192.168.0.10:8080/media/images/2016/06/18/image.gif",
                        "height": 300,
                        "width": 200
                    }
                }
            },
            {
                "id": 2,
                "title": "Jordan",
                "is_subscribed": "jo",
                "type": "jo",
                "website": {
                    "id": 1,
                    "name": "Khaberni",
                    "image": {
                        "caption": "asdas",
                        "file": "http://192.168.0.10:8080/media/images/2016/06/18/image.gif",
                        "height": 300,
                        "width": 200
                    }
                }
            },
            {
                "id": 3,
                "title": "Jordan",
                "is_subscribed": "jo",
                "type": "jo",
                "website": {
                    "id": 1,
                    "name": "Khaberni",
                    "image": {
                        "caption": "asdas",
                        "file": "http://192.168.0.10:8080/media/images/2016/06/18/image.gif",
                        "height": 300,
                        "width": 200
                    }
                }
            }
        ];

        // Subscription.all().then(function(data){
        //     $scope.subscriptions = data.results;
        // }, function(e){
        //     Popup.showError('there is an error, please try again.');
        // });

        $scope.edit = function(id, noti) {
            $mdBottomSheet.show({
                templateUrl: 'views/partials/bottom-sheet-subscription-template.html',
                controller: 'EditSubscriptionController',
                locals: {
                    id: id,
                    noti: noti
                }
            }).then(function(m) {
                console.log(m);
            });
        };
    }
]);
