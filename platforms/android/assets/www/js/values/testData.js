alsharq.value('testData', {
    "POST_REGISTER": {
        "token": "1a0bceb65cda526e2e8e9ce3e2339034c8c698a9",
        "user": {
            "id": 62,
            "email": "ebrahimes2@gmail.com",
            "first_name": "Ibrahim Esmat",
            "last_name": "Saqr",
            "is_registered": true,
            "profile_pic": null,
            "facebook_connected": false,
            "google_connected": false
        }
    },

    "POST_LOGIN": {
        "token": "75eb9e7afaedd82653b4b5eed00a9ecfdb26d835",
        "user": {
            "email": "rakan.alhneiti123@gmail.com",
            "facebook_connected": false,
            "first_name": "Rakan",
            "google_connected": false,
            "id": 6,
            "is_registered": true,
            "last_name": "Alhneiti",
            "profile_pic": null
        }
    },

    "POST_SOCIAL_LOGIN": {
        "created": false,
        "token": "75eb9e7afaedd82653b4b5eed00a9ecfdb26d835",
        "user": {
            "email": "rakan.alhneiti123@gmail.com",
            "facebook_connected": false,
            "first_name": "Rakan",
            "google_connected": false,
            "id": 6,
            "is_registered": true,
            "last_name": "Alhneiti",
            "profile_pic": null
        }
    },

    "POST_GUEST_LOGIN": {
        "token": "75eb9e7afaedd82653b4b5eed00a9ecfdb26d835",
        "user": {
            "email": "rakan.alhneiti123@gmail.com",
            "facebook_connected": false,
            "first_name": "Rakan",
            "google_connected": false,
            "id": 6,
            "is_registered": true,
            "last_name": "Alhneiti",
            "profile_pic": null
        }
    },

    "POST_LOGOUT" : {
        "message": "successfully logged out"
    },

    "GET_PROFILE": {
        "email": "rakan.alhneiti123@gmail.com",
        "facebook_connected": false,
        "first_name": "Rakan",
        "google_connected": false,
        "id": 6,
        "is_registered": true,
        "last_name": "Alhneiti",
        "profile_pic": null
    },

    "POST_PROFILE": {
        "email": "rakan.alhneiti123@gmail.com",
        "facebook_connected": false,
        "first_name": "Rakan",
        "google_connected": false,
        "id": 6,
        "is_registered": true,
        "last_name": "Alhneiti",
        "profile_pic": null
    },

    "POST_RESET_PASSWORD": {
        "message": "password reseted"
    },

    "GET_COUNTRIES": {
        "count": 1,
        "next": null,
        "previous": null,
        "results": [
            {
                "code": "jo1",
                "id": 1,
                "name": "Jordan1"
            },
            {
                "code": "jo2",
                "id": 2,
                "name": "Jordan2"
            },
            {
                "code": "jo3",
                "id": 3,
                "name": "Jordan3"
            },
            {
                "code": "jo4",
                "id": 4,
                "name": "Jordan4"
            },
            {
                "code": "jo5",
                "id": 5,
                "name": "Jordan5"
            }
        ]
    },

    "GET_MY_COUNTRIES": {
        "count": 1,
        "next": null,
        "previous": null,
        "results": [
            {
                "code": "jo1",
                "id": 1,
                "name": "Jordan1"
            },

            {
                "code": "jo3",
                "id": 3,
                "name": "Jordan3"
            },

            {
                "code": "jo5",
                "id": 5,
                "name": "Jordan5"
            }
        ]
    },

    "POST_ADD_COUNTRY": {},

    "POST_REMOVE_COUNTRY": {},

    "GET_INTERESTS": {
        "count": 1,
        "next": null,
        "previous": null,
        "results": [
            {
                "id": 1,
                "name": "Jordan",
                "subscribed": "jo",
            },
            {
                "id": 2,
                "name": "Jordan2",
                "subscribed": "jo2",
            },
            {
                "id": 3,
                "name": "Jordan3",
                "subscribed": "jo3",
            }
        ]
    },

    "GET_MY_INTERESTS": {
        "count": 1,
        "next": null,
        "previous": null,
        "results": [
            {
                "id": 1,
                "name": "Jordan",
                "subscribed": "jo",
            },
            {
                "id": 3,
                "name": "Jordan3",
                "subscribed": "jo3",
            }
        ]
    },

    "POST_ADD_INTEREST": {},

    "POST_REMOVE_INTEREST": {},

    "GET_FEED": {
        "count": 1,
        "results": [
            {
                "id": 1,
                "is_subscribed": null,
                "title": "نبض  الشارع",
                "type": "category",
                "name": "Khaberni",
                "website": {
                    "id": 1,
                    "image": {
                        "caption": "asdas",
                        "file": "http://192.168.0.10:8080/media/images/2016/06/18/image.gif",
                        "height": 300,
                        "width": 200
                    },
                }
            },
            {
                "id": 2,
                "is_subscribed": null,
                "title": "نبض  الشارع",
                "type": "category",
                "name": "Khaberni",
                "website": {
                    "id": 1,
                    "image": {
                        "caption": "asdas",
                        "file": "http://192.168.0.10:8080/media/images/2016/06/18/image.gif",
                        "height": 300,
                        "width": 200
                    },
                }
            },
            {
                "id": 3,
                "is_subscribed": null,
                "title": "نبض  الشارع",
                "type": "category",
                "name": "Khaberni",
                "website": {
                    "id": 1,
                    "image": {
                        "caption": "asdas",
                        "file": "http://192.168.0.10:8080/media/images/2016/06/18/image.gif",
                        "height": 300,
                        "width": 200
                    },
                }
            }
        ]
    },

    "POST_FEED": {},

    "POST_NOTIFY_FEED": {},

    "POST_NEWSFEED": {
        "count": 1,
        "results": [
            {
                "body": " ",
                "channel_id": 1,
                "channel_name": "نبض الشارع",
                "channel_type": "category",
                "country_id": [ 1 ],
                "country_name": [
                    "Jordan"
                ],
                "date_published": "2016-03-13T21:36:00",
                "interest_id": [ 1 ],
                "interest_name": [ "Local" ],
                "is_favorite": false,
                "is_readlater": false,
                "item_id": "336",
                "photos": [
                    "http://192.168.0.10:8080/media/images/2016/03/14/1457908553_JyY9BxE.jpg",
                ],
                "status": 1,
                "summary": "article content",
                "thumbnail": null,
                "title": "الطراونة: نفس حزبي بشعارات المعتصمين - فيديو",
                "url": "http://192.168.0.10:8080/article/336",
                "videos": null,
                "website_id": 1,
                "website_image": null,
                "website_name": "Khaberni"
            }
        ]
    },

    "GET_ARTICLES": {
        "count": 2,
        "results": [
            {
                "body": " ",
                "channel_id": 1,
                "channel_name": "نبض الشارع",
                "channel_type": "category",
                "country_id": [ 1 ],
                "country_name": [
                    "Jordan"
                ],
                "date_published": "2016-03-13T21:36:00",
                "interest_id": [ 1 ],
                "interest_name": [ "Local" ],
                "is_favorite": false,
                "is_readlater": false,
                "item_id": "336",
                "photos": [
                    "http://192.168.0.10:8080/media/images/2016/03/14/1457908553_JyY9BxE.jpg",
                ],
                "status": 1,
                "summary": "article content",
                "thumbnail": null,
                "title": "الطراونة: نفس حزبي بشعارات المعتصمين - فيديو",
                "url": "http://192.168.0.10:8080/article/336",
                "videos": null,
                "website_id": 1,
                "website_image": null,
                "website_name": "Khaberni"
            }
        ]
    },

    "POST_ARTICLE_READ_COUNT": {},

    "POST_ARTICLE_SHARE_COUNT": {},

    "FAVORITE_ARTICLES": {
        "count": 1,
        "next": "",
        "previous": "",
        "results": [
            {
                "body": " ",
                "channel_id": 1,
                "channel_name": "نبض الشارع",
                "channel_type": "category",
                "country_id": [ 1 ],
                "country_name": [
                    "Jordan"
                ],
                "date_published": "2016-03-13T21:36:00",
                "interest_id": [ 1 ],
                "interest_name": [ "Local" ],
                "is_favorite": false,
                "is_readlater": false,
                "item_id": "336",
                "photos": [
                    "http://192.168.0.10:8080/media/images/2016/03/14/1457908553_JyY9BxE.jpg",
                ],
                "status": 1,
                "summary": "article content",
                "thumbnail": null,
                "title": "الطراونة: نفس حزبي بشعارات المعتصمين - فيديو",
                "url": "http://192.168.0.10:8080/article/336",
                "videos": null,
                "website_id": 1,
                "website_image": null,
                "website_name": "Khaberni"
            }
        ]
    },

    "ADD_FAVORITE_ARTICLE": {},

    "REMOVE_FAVORITE_ARTICLE": {},

    "GET_SUBSCRIPERS": {
        "count": 1,
        "next": null,
        "previous": null,
        "results": [
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
            }
        ]
    },

    "GET_SUBSCRIPTION_FILTER": {
        "countries": [
            {
                "count": 0,
                "id": 1,
                "name": "Jordan"
            }
        ],
        "keywords": [
            {
                "count": 0,
                "id": 3,
                "name": "test"
            }
        ],
        "websites": [
            {
                "categories": [
                    {
                        "count": 0,
                        "id": 2,
                        "name": "اسواق"
                    }
                ],
                "count": 0,
                "id": 1,
                "name": "Khaberni"
            }
        ]
    },

    "KEYWORDS": {
        "count": 1,
        "next": "",
        "previous": "",
        "results": [
            {
                "content": "test",
                "id": 3
            }
        ]
    },

    "ADD_KEYWORD": {},

    "REMOVE_KEYWORD": {},

    "COMMENTS_COUNT": {},

    "COMMENTS": {
        "count": 1,
        "next": "",
        "previous": "",
        "results": [
            {
                "comment": "Hello",
                "id": 4,
                "submit_date": "2016-06-28T09:28:17Z",
                "user": {
                    "email": "rakan.alhneiti123@gmail.com",
                    "facebook_connected": false,
                    "first_name": "Rakan",
                    "google_connected": false,
                    "id": 6,
                    "is_registered": true,
                    "last_name": "Alhneiti",
                    "profile_pic": null
                }
            }
        ]
    },

    "ADD_COMMENTS": {},

    "GET_WEBSITES": {
        "count": 1,
        "next": null,
        "previous": null,
        "results": [
            {
                "id": 1,
                "name": "Jordan",
                "image": {
                    "caption": "asdas",
                    "file": "http://192.168.0.10:8080/media/images/2016/06/18/image.gif",
                    "height": 300,
                    "width": 200
                },
            }
        ]
    },

    "POST_CONTACT": {}
});
