alsharq.constant('API', (function(){

    var URL = "http://sharq.premaerp.com/api/v1/";

    // Update User Device -> don't forget it

    return {
        "POST_REGISTER":           URL + "user/register",
        "POST_LOGIN":              URL + "user/login",
        "POST_GUEST_LOGIN":        URL + "user/guest",
        "POST_LOGOUT":             URL + "user/logout",
        "PROFILE":                 URL + "user",
        "GET_WEBSITES":            URL + "website/list",
        "GET_MY_INTERESTS":        URL + "interest/mine",
        "GET_INTERESTS":           URL + "interest/list",
        "GET_COUNTRIES":           URL + "country/list",
        "GET_MY_COUNTRIES":        URL + "country/mine",
        "POST_CONTACT":            URL + "contact",
        "KEYWORDS":                URL + "keyword/list",
        "ADD_KEYWORD":             URL + "keyword/add",
        "REMOVE_KEYWORD":          URL + "keyword/remove",
        "FAVORITE_ARTICLES":       URL + "article/favorite/list",
        "REMOVE_FAVORITE_ARTICLE": URL + "article/favorite/remove",
        "LATER_ARTICLES":          URL + "article/readlater/list",
        "REMOVE_LATER_ARTICLE":    URL + "article/readlater/remove",
        "GET_ARTICLES":            URL + "article/list",
        "ADD_FAVORITE_ARTICLE":    URL + "article/favorite/add",
        "ADD_LATER_ARTICLE":       URL + "article/readlater/add",
        "POST_ADD_COUNTRY":        URL + "country/add",
        "POST_REMOVE_COUNTRY":     URL + "country/remove",
        "POST_ADD_INTEREST":       URL + "interest/add",
        "POST_REMOVE_INTEREST":    URL + "interest/remove",
        "COMMENTS_COUNT":          URL + "comments/count",
        "ADD_COMMENTS":            URL + "comments/add",
        "COMMENTS":                URL + "comments",
        "GET_FEED":                URL + "feed/list",
        "POST_FEED":               URL + "feed/subscribe",
        "GET_SUBSCRIPTION_FILTER": URL + "subscriptions/filter",
        "GET_SUBSCRIPERS":         URL + "subscriptions/list",
        "POST_ARTICLE_READ_COUNT": URL + "article/mark_read",
        "POST_NEWSFEED":           URL + "newsfeed",
        "POST_SOCIAL_LOGIN":       URL + "user/register_social",

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
         *     article_id: 1,
         * }
         * @return
         *     Status 200 on sucess
         *     Status 400 on fails
         */
        "POST_ARTICLE_SHARE_COUNT": URL + "article/mark_share",
    }
})());



























