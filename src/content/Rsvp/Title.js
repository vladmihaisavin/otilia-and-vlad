import React from "react"

import { LANGUAGE } from "../../utils/constants"

export default {
    [LANGUAGE.EN]: {
        Heading: () => <>RSVP</>,
        SubHeading: () => (
            <span>
                We would love to celebrate this event with you. Please let us know if you can join us,
                by completing the following form.
            </span>
        )
    },
    [LANGUAGE.RO]: {
        Heading: () => <>Confirmare</>,
        SubHeading: () => (
            <span>
                Ne-ar face mare placere sa luati parte la evenimentul nostru.<br/>
                Va rugam sa ne confirmati prezenta dvs. prin completarea urmatorului formular.
            </span>
        )
    }
}
