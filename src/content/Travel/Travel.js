import React from "react"

import { LANGUAGE } from "../../utils/constants"

export default {
    [LANGUAGE.EN]: [
        {
            Type: () => <>Flight</>,
            Title: () => <></>,
            Address: null,
            Phone: null,
            Details: () => (
                <>
                    <p>Iassy is the best place to fly into.</p>
                </>
            ),
            link:
                "#",
        }
    ],
    [LANGUAGE.RO]: [
        {
            Type: () => <>Zbor</>,
            Title: () => <></>,
            Address: null,
            Phone: null,
            Details: () => (
                <>
                    <p>Iașiul are cel mai bun aeroport din zonă.</p>
                </>
            ),
            link:
                "#",
        }
    ]
}
