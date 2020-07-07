import React from "react"

import { LANGUAGE } from "../../utils/constants"

export default {
    [LANGUAGE.EN]: {
        Heading: () => <>Travel</>,
        SubHeading: () => (
            <>
                We're getting married in <strong>Iassy</strong>. The events take place in various locations.
                Here is some information about how to get to the places where the events are hosted.
            </>
        ),
    },
    [LANGUAGE.RO]: {
        Heading: () => <>Cum ajung?</>,
        SubHeading: () => (
            <>
                Ne căsătorim în <strong>Iași</strong>. Evenimentele au loc în mai multe locații.
                Aici sunt informații despre cum puteți ajunge la evenimente.
            </>
        ),
    },
}
