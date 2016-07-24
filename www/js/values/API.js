alsharq.constant('API', (function(){

    var URL = "http://sahifa-app.com/api/v1/";

    // Update User Device -> don't forget it

    return {
        "POST_REGISTER": URL + "user/register",
        "POST_LOGIN": URL + "user/login",
        "POST_GUEST_LOGIN": URL + "user/guest",
        "POST_LOGOUT": URL + "user/logout",
        "GET_PROFILE": URL + "user",
        "GET_WEBSITES": URL + "website/list",
        "GET_MY_INTERESTS": URL + "interest/mine",
        "GET_INTERESTS": URL + "interest/list",
        "GET_COUNTRIES": URL + "country/list",
        "GET_MY_COUNTRIES": URL + "country/mine",
        "POST_CONTACT": URL + "contact",
        "KEYWORDS": URL + "keyword/list",
        "ADD_KEYWORD": URL + "keyword/add",
        "REMOVE_KEYWORD": URL + "keyword/remove",
        "FAVORITE_ARTICLES": URL + "article/favorite/list",
        "REMOVE_FAVORITE_ARTICLE": URL + "article/favorite/remove",
        "LATER_ARTICLES": URL + "article/readlater/list",
        "REMOVE_LATER_ARTICLE": URL + "article/readlater/remove",
        "GET_ARTICLES": URL + "article/list",
        "ADD_FAVORITE_ARTICLE": URL + "article/favorite/add",
        "ADD_LATER_ARTICLE": URL + "article/readlater/add",
        "POST_ADD_COUNTRY": URL + "country/add",
        "POST_REMOVE_COUNTRY": URL + "country/remove",
        "POST_ADD_INTEREST": URL + "interest/add",
        "POST_REMOVE_INTEREST": URL + "interest/remove",
        "COMMENTS_COUNT": URL + "comments/count",
        "ADD_COMMENTS": URL + "comments/add",
        "COMMENTS": URL + "comments",
        "GET_FEED": URL + "feed/list",
        "POST_FEED": URL + "feed/subscribe",
        "GET_SUBSCRIPTION_FILTER": URL + "subscriptions/filter",
        


        /**
         * @desc [ This endpoint archives the article from list by marking it as read (after the user has read the article, he/she can mark it as read) ]
         * @method POST
         * @send {
         *     article_id: 1
         * }
         * @return 
         *     Status 200 on sucess
         *     Status 400 on fails
         */
        "MARK_AS_READ": URL + "article/readlater/markasread",

        /**
         * @desc [ Provide the system with the Device ID or Token provided by Apple Notification service or Google Cloud Messaging for push notifications. ]
         * @method [ POST, DELETE ]
         * @send {
         *     type: android, ios -> POST
         *     key -> POST, DELETE
         * }
         * @return
         *     Status 200 on sucess
         *     Status 400 on fails
         */
        "UPDATE_DEVICE": URL + "user/devices/update",

        /**
         * @method POST
         * @send {
         *     email: "",
         *     full_name: "",
         *     password: "",
         *     google_token: "",
         *     facebook_token: ""
         * }
         * @return {
         *     created: false,
         *     token: "75eb9e7afaedd82653b4b5eed00a9ecfdb26d835",
         *     user: {
         *         "email": "rakan.alhneiti123@gmail.com",
         *         "facebook_connected": false,
         *         "first_name": "Rakan",
         *         "google_connected": false,
         *         "id": 6,
         *         "is_registered": true,
         *         "last_name": "Alhneiti",
         *         "profile_pic": null
         *     }
         * }
         */
        "POST_SOCIAL_LOGIN": URL + "user/register_social",

        /**
         * @method POST
         * @send {
         *     full_name: "",
         *     password: "",
         *     profile_pic: "" (File upload) (Content-Type: Multipart/form-data)
         * }
         * @return {
         *     "email": "rakan.alhneiti123@gmail.com",
         *     "facebook_connected": false,
         *     "first_name": "Rakan",
         *     "google_connected": false,
         *     "id": 6,
         *     "is_registered": true,
         *     "last_name": "Alhneiti",
         *     "profile_pic": null
         * }
         */
        "POST_PROFILE": URL + "user",

        /**
         * @method POST
         * @send {}
         * @return {
         *     "message": "password reseted"
         * }
         */
        "POST_RESET_PASSWORD": URL + "user/forgot_password",

        /**
         * @method POST
         * @send {
         *     feed_id: 2,
         * }
         * @return
         *     Status 200 on sucess
         *     Status 400 on fails
         */
        "POST_NOTIFY_FEED": URL + "feed/notify",

        /**
         * @method POST
         * @send {
         *     filters = [
         *         {
         *             “type”: “country”,
         *             “name”: “jordan”
         *         },
         *         {
         *             “type”: “interest”,
         *             “name”: “local”
         *         },
         *         {
         *             “type”: “keyword”,
         *             “name”: “داعش”
         *         },
         *         {
         *             “type”: “category”,
         *             “id”: 2,
         *         }
         *     ]
         * }
         * @return {
         *     "count": 1,
         *     "results": [
         *         {
         *             "body": " ",
         *             "channel_id": 1,
         *             "channel_name": "نبض الشارع",
         *             "channel_type": "category",
         *             "country_id": [ 1 ],
         *             "country_name": [
         *                 "Jordan"
         *             ],
         *             "date_published": "2016-03-13T21:36:00",
         *             "interest_id": [ 1 ],
         *             "interest_name": [ "Local" ],
         *             "is_favorite": false,
         *             "is_readlater": false,
         *             "item_id": "336",
         *             "photos": [
         *                 "http://192.168.0.10:8080/media/images/2016/03/14/1457908553_JyY9BxE.jpg",
         *             ],
         *             "status": 1,
         *             "summary": "article content",
         *             "thumbnail": null,
         *             "title": "الطراونة: نفس حزبي بشعارات المعتصمين - فيديو",
         *             "url": "http://192.168.0.10:8080/article/336",
         *             "videos": null,
         *             "website_id": 1,
         *             "website_image": null,
         *             "website_name": "Khaberni"
         *         }
         *     ]
         * }
         */
        "POST_NEWSFEED": URL + "newsfeed",

        /**
         * @method POST
         * @send {
         *     article_id: 1,
         * }
         * @return
         *     Status 200 on sucess
         *     Status 400 on fails
         */
        "POST_ARTICLE_READ_COUNT": URL + "article/mark_read",

        /**
         * @method POST
         * @send {
         *     article_id: 1,
         * }
         * @return
         *     Status 200 on sucess
         *     Status 400 on fails
         */
        "POST_ARTICLE_SHARE_COUNT": URL + "article/mark_share",

        /**
         * @method GET
         * @send {
         *     page: 1,
         * }
         * @return {
         *     "count": 1,
         *     "next": null,
         *     "previous": null,
         *     "results": [
         *         {
         *             "id": 1,
         *             "title": "Jordan"
         *             "is_subscribed": "jo",
         *             "type": "jo",
         *             "website": {
         *                 "id": 1,
         *                 "name": "Khaberni",
         *                 "image": {
         *                     "caption": "asdas",
         *                     "file": "http://192.168.0.10:8080/media/images/2016/06/18/image.gif",
         *                     "height": 300,
         *                     "width": 200
         *                 }
         *             }
         *         }
         *     ]
         * }
         */
        "GET_SUBSCRIPERS": URL + "subscriptions/list",
    }
})());



























