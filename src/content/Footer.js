import React from "react"
import Emoji from "react-emoji-render"

import { LANGUAGE } from "../utils/constants"

export default {
    [LANGUAGE.EN]: {
        Content: () => (
            <>
                <p>
                    Contact us at{" "}
                    <a href="mailto:savin.vladmihai@gmail.com">
                    savin.vladmihai@gmail.com
                    </a>
                    .
                </p>
                <p>
                    <Emoji text="Made with 💚 in Iassy by Otilia & Vlad." />
                </p>
            </>
        )
    },
    [LANGUAGE.RO]: {
        Content: () => (
            <>
                <p>
                    Contactează-ne la{" "}
                    <a href="mailto:savin.vladmihai@gmail.com">
                        savin.vladmihai@gmail.com
                    </a>
                    .
                </p>
                <p>
                    <Emoji text="Făcut cu 💚 în Iași de Otilia & Vlad." />
                </p>
            </>
        )
    }
}
