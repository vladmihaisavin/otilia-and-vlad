import React from "react"
import { useCookies } from "react-cookie"
import Container from "react-bootstrap/Container"
import styles from "./Rsvp.module.scss"
import { Title } from "../content/Invitation"
import { selectLanguage } from "../utils/cookies"

function Invitation() {
    const [cookies] = useCookies(["language"])
    const language = selectLanguage(cookies)
    return (
        <>
            <div className={styles["sub-heading"]}>
            { Title[language].Heading() }
            </div>
            <Container className={styles['form-container']}>
            </Container>
        </>
    )
}

export default Invitation
