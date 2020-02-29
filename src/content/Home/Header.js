import React from "react"

import { LANGUAGE } from "../../utils/constants"

export default {
    [LANGUAGE.EN]: () => <span>We&apos;re getting married!</span>,
    [LANGUAGE.RO]: () => <span>Ne căsătorim!</span>
}
