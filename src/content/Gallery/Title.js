import React from "react"

import { LANGUAGE } from "../../utils/constants"

export default {
    [LANGUAGE.EN]: {
        Heading: () => <>Gallery</>,
        SubHeading: () => <div style={{ padding: '0 20px' }}>
            We will let you know when we get the photos and videos! <br/>
            You will then be able to access them from this page.
        </div>
    },
    [LANGUAGE.RO]: {
        Heading: () => <>Galerie</>,
        SubHeading: () => <div style={{ padding: '0 20px' }}>
            Vă vom anunța când vom primi fotografiile și videoclipurile! <br/>
            Din acel moment, le veți putea accesa din această pagină.
        </div>
    }
}
