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
        ),
        SubHeading2: (attending) => (
            <span>
                Thank you for completing the RSVP form.<br/>
                {attending ? 'We can\'t wait to party together!' : 'We\'re sorry that you can\'t attend the event.'}<br/>
            </span>
        ),
        Footer: () => (
            <span>
                In case some changes occured in your schedule, please let us know.
            </span>
        ),
        OverviewHeader: () => (
            <span>
                This is the information that you gave us.
            </span>
        ),
        morning: 'Good morning, ',
        day: 'Hello, ',
        evening: 'Good evening, '
    },
    [LANGUAGE.RO]: {
        Heading: () => <>Confirmare</>,
        SubHeading: () => (
            <span>
                Ne-ar face mare placere sa luati parte la evenimentul nostru.<br/>
                Va rugam sa ne confirmati prezenta dvs. prin completarea urmatorului formular.
            </span>
        ),
        SubHeading2: (attending) => (
            <span>
                Va multumim ca ati completat formularul de confirmare.<br/>
                {attending ? 'Abia asteptam sa petrecem impreuna!' : 'Ne pare rau ca nu puteti participa la eveniment.'}<br/>
            </span>
        ),
        Footer: () => (
            <span>
                In cazul in care au aparut modificari in programul dvs, va rugam sa ne anuntati.
            </span>
        ),
        OverviewHeader: () => (
            <span>
                Acestea sunt informatiile pe care ni le-ati transmis.
            </span>
        ),
        morning: 'Buna dimineata, ',
        day: 'Buna ziua, ',
        evening: 'Buna seara, '
    }
}
