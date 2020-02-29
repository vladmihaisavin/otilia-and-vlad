import React from "react"
import { useCookies } from "react-cookie"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Header from "../../components/Header"

import styles from "./Home.module.scss"
import { Details as DetailsText, Header as HeaderText } from "../../content/Home"
import headerImg from "../../photos/header_big.jpg"

import { selectLanguage } from "../../utils/cookies"

function Home() {
    const [cookies] = useCookies(["language"])
    const language = selectLanguage(cookies)
    const { Title, Date, Location, locationLink } = DetailsText[selectLanguage(cookies)]

    return (
        <div className={styles.container}>
            <Header
                imageUrl={headerImg}
                Heading={HeaderText[language]}
                SubHeading={null}
            />
            <Container fluid>
                <Row>
                    <Col className={styles.details}>
                        <h1 className={styles.announcement}>
                            <Title />
                        </h1>
                        <h1 className={styles.date}>
                            <Date />
                        </h1>
                        <h2 className={styles.location}>
                            <a
                                href={locationLink}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Location />
                            </a>
                        </h2>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Home
