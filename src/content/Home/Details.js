import React from "react"

import { LANGUAGE } from "../../utils/constants"

export default {
    [LANGUAGE.EN]: {
        Title: () => <span>Otilia & Vlad are getting married!</span>,
        Date: () => <span>05/09/2020</span>,
        Location: () => <span>Congres Hall, Sala Rossini, Palas, Iasi</span>,
        locationLink: "https://goo.gl/maps/KJxHGoh7TrYNUcZU8"
    },
    [LANGUAGE.RO]: {
        Title: () => <span>Otilia și Vlad se căsătoresc!</span>,
        Date: () => <span>05/09/2020</span>,
        Location: () => <span>Congres Hall, Sala Rossini, Palas, Iasi</span>,
        locationLink: "https://goo.gl/maps/KJxHGoh7TrYNUcZU8"
    }
}
