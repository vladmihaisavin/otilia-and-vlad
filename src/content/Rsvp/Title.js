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
                Ne-ar face mare plăcere să luați parte la evenimentul nostru.<br/>
                Vă rugăm să ne confirmați prezența dvs. prin completarea următorului formular.
            </span>
        ),
        SubHeading2: (attending) => (
            <span>
                Vă mulțumim că ați completat formularul de confirmare.<br/>
                {attending ? 'Abia așteptăm să petrecem împreună!' : 'Ne pare rău ca nu puteți participa la eveniment.'}<br/>
            </span>
        ),
        Footer: () => (
            <span>
                În cazul în care au apărut modificări în programul dvs, vă rugăm să ne anunțați.
            </span>
        ),
        OverviewHeader: () => (
            <span>
                Acestea sunt informațiile pe care ni le-ați transmis.
            </span>
        ),
        morning: 'Bună dimineața, ',
        day: 'Bună ziua, ',
        evening: 'Bună seara, '
    }
}
