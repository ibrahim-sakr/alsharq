franchise.value('testData', {
    "POST_LOG_IN": {},

    "PROFILE": {},

    "UPDATE_PROFILE": URL + "users/profile",

    "NOTIFICATIONS": [
        {
            "id": "1",
            "title": "notification one",
            "description": "notification one description"
        },
        {
            "id": "2",
            "title": "notification two",
            "description": "notification two description"
        },
        {
            "id": "3",
            "title": "notification three",
            "description": "notification three description"
        },
        {
            "id": "4",
            "title": "notification four",
            "description": "notification four description"
        },
        {
            "id": "5",
            "title": "notification five",
            "description": "notification five description"
        },
        {
            "id": "6",
            "title": "notification six",
            "description": "notification six description"
        },
    ],

    "ONE_NOTIFICATION": {
        "id": "1",
        "title": "notification six",
        "description": "notification six description"
    },

    "READ_NOTIFICATION": URL + "notifications/read/{:id}",

    "NOTIFICATIONS_NUMBER": 6,

    "NEW_FRANCHISE": URL + "franchises/request",

    "FORMS": URL + "forms",

    "ONE_FORM": URL + "forms/{:id}",

    "CHAPTERS": URL + "chapters",

    "ONE_CHAPTER": URL + "chapters/{:id}",

    "TERMS": {
        "updated_at": "2016-06-01 11:59:59",
        "terms" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta perspiciatis est sint, iste assumenda hic accusamus necessitatibus nam illum magni excepturi natus quae facilis provident nihil aliquid quaerat, ratione magnam tenetur sit. Ipsa suscipit velit eum, cumque, at incidunt quis unde officiis nesciunt saepe libero, in reprehenderit recusandae, id eaque facilis sint inventore excepturi quae blanditiis amet nemo autem! Accusamus molestiae facilis obcaecati saepe quisquam ea veritatis iste, provident, cumque ab porro quaerat, voluptate nihil modi sunt. Cum vel quaerat doloremque reiciendis non, eaque, voluptates itaque dolorum facilis quas cumque aperiam repellendus quia, aspernatur obcaecati perferendis dolores consequatur. Beatae, officiis!"
    },

    "ABOUT": "",

    "SETTINGS": {
        'phone_1' : '123213',
        'phone_2' : '123455',
        'fax' : 'asd sdas',
        'email' : 'mail@domain.com',
        'physical_address' : 'Address',
        'mailing_address' : 'mail2@domain.com',
        'country': '',
        'city': '',
    },

    "ABOUT_PAGE": {
        "about" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus ipsa soluta fugit debitis praesentium illo nisi incidunt eaque nesciunt, totam voluptatibus iste nemo! Quod quidem magni pariatur, sunt repellendus quae, animi delectus debitis, corporis placeat obcaecati veniam? Impedit ex dicta nisi temporibus maxime eos magni esse dolorum excepturi eius! Laudantium, temporibus tempora vel odio animi alias necessitatibus quibusdam illum in molestiae distinctio expedita quis tenetur soluta aspernatur voluptatem esse nesciunt ducimus illo, quos iste fugiat. Eaque ad repudiandae, laboriosam fugiat maiores? Assumenda consectetur quidem obcaecati vel ut alias iste voluptatem, nihil dolor. Dolores laborum voluptates, dolor sit consequuntur, consequatur quis.",
        "settings" : {
            "phone_1" : "123213",
            "phone_2" : "123455",
            "fax" : "asd sdas",
            "email" : "mail@domain.com",
            "physical_address" : "Address",
            "mailing_address" : "mail2@domain.com",
            "country": "USA",
            "city": "NY",
        },
    },

    "REQUEST_FORM": "",

    "CONTACT": URL + "pages/contact",
});
