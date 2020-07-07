import React, { useState } from "react"
import { useCookies } from "react-cookie"
import Container from "react-bootstrap/Container"
import Image from "react-bootstrap/Image"
import Card from "react-bootstrap/Card"
import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"
import styles from "./Rsvp.module.scss"
import { Title, Description } from "../content/Gift"
import { selectLanguage } from "../utils/cookies"
import giftImage from "../photos/header_big.jpg"
import Background from '../photos/rsvp.jpg'

function Gift() {
    const [cookies] = useCookies(["language"])
    const language = selectLanguage(cookies)
    const PAYMENT_TYPES = Description[language].PAYMENT_TYPES
    const [show, setShow] = useState(false)
    const [paymentType, setPaymentType] = useState(PAYMENT_TYPES['revolut'])

    const handleClose = () => setShow(false)
    const handleShow = (modalType) => {
        setPaymentType(PAYMENT_TYPES[modalType])
        setShow(true)
    }

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
            <Container className={styles['form-container']} style={{ marginBottom: '40px' }}>
                <Image src={ giftImage } fluid />
            </Container>
            <Card style={{ width: '30rem', marginBottom: '40px' }}>
                <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted">
                        { Description[language].subHeading() }
                    </Card.Subtitle>
                    <Card.Text>
                        { Description[language].ways() }
                    </Card.Text>
                    <Card.Link href="#" onClick={() => handleShow('ing')}>ING Bank</Card.Link>
                    <Card.Link href="#" onClick={() => handleShow('revolut')}>Revolut</Card.Link>
                    <Card.Text style={{ marginTop: '1rem' }}>
                        { Description[language].thanks() }
                    </Card.Text>
                </Card.Body>
            </Card>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{ paymentType.title }</Modal.Title>
                </Modal.Header>
                <Modal.Body>{ paymentType.text() }</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        { Description[language].close() }
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Gift
