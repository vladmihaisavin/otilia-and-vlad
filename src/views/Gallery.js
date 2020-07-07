import React from "react"
import { useCookies } from "react-cookie"
import Container from "react-bootstrap/Container"
import Background from '../photos/rsvp.jpg'
import styles from "./Rsvp.module.scss"
import { Title } from "../content/Gallery"
import { selectLanguage } from "../utils/cookies"

function Gallery() {
    const [cookies] = useCookies(["language"])
    const language = selectLanguage(cookies)
    return (
        <div style={{
          backgroundImage: `url(${Background})`,
          height: '100%',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
          }}>
            <div className={styles["sub-heading"]}>
            { Title[language].Heading() }
            </div>
            <Container className={styles['form-container']}>
            </Container>
            { Title[language].SubHeading() }
        </div>
    )
}

export default Gallery
