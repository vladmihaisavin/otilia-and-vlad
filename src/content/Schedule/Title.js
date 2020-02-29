import React from "react"

import { LANGUAGE } from "../../utils/constants"

export default {
    [LANGUAGE.EN]: {
        Heading: () => <>Schedule</>,
        SubHeading: () => (
            <span>
                Here's what to expect during our wedding weekend. We can't wait
                to celebrate with you!
            </span>
        )
    },
    [LANGUAGE.RO]: {
        Heading: () => <>Program</>,
        SubHeading: () => (
            <span>
                Acesta este programul nunții noastre.
                Suntem nerăbdători să celebram acest eveniment alături de dumneavoastră!
            </span>
        )
    }
}
