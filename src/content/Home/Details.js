import React from "react"

import { LANGUAGE } from "../../utils/constants"

export default {
    [LANGUAGE.EN]: {
        Title: () => <span>Otilia & Vlad are getting married!</span>,
        Date: () => <span>22/08/2020</span>,
        Location: () => <span>Liria Events, Aroneanu Lake, Iasi</span>,
        locationLink: "https://goo.gl/maps/3TiohUK9n19q6piv5"
    },
    [LANGUAGE.RO]: {
        Title: () => <span>Otilia și Vlad se căsătoresc!</span>,
        Date: () => <span>22/08/2020</span>,
        Location: () => <span>Liria Events, Lacul Aroneanu, Iasi</span>,
        locationLink: "https://goo.gl/maps/3TiohUK9n19q6piv5"
    }
}
