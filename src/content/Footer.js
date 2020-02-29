import React from "react"
import Emoji from "react-emoji-render"
import Octicon, { MarkGithub } from "@primer/octicons-react"

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
                <p>
                    <a
                        href="https://github.com/vladmihaisavin/otilia-and-vlad"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Source code
                    </a>{" "}
                    available on <Octicon icon={MarkGithub} size={11} />
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
                <p>
                    <a
                        href="https://github.com/vladmihaisavin/otilia-and-vlad"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Cod sursă
                    </a>{" "}
                    disponibil pe <Octicon icon={MarkGithub} size={11} />
                </p>
            </>
        )
    }
}
