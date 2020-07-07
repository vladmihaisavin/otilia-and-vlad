import React, { useState } from "react"
import { useCookies } from "react-cookie"
import Container from "react-bootstrap/Container"
import Image from "react-bootstrap/Image"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Modal from "react-bootstrap/Modal"
import styles from "./Rsvp.module.scss"
import { Title } from "../content/Invitation"
import { Description } from "../content/Gift"
import { selectLanguage } from "../utils/cookies"
import invitationImage from "../photos/invitation.jpg"
import telImage1 from "../photos/tel1.jpg"
import telImage2 from "../photos/tel2.jpg"

const TEL_NUMBERS = {
    tel1: [
        {
            name: 'Otilia',
            tel: '0756564513'
        }, {
            name: 'Vlad',
            tel: '0725582647'
        }, {
            name: 'Vreme Lidia',
            tel: '0747776503'
        }, {
            name: 'Vreme Eusebiu',
            tel: '0740547022'
        }
    ],
    tel2: [
        {
            name: 'Otilia',
            tel: '0756564513'
        }, {
            name: 'Vlad',
            tel: '0725582647'
        }, {
            name: 'Savin Mirela',
            tel: '0728989895'
        }, {
            name: 'Savin Mihai',
            tel: '0723015634'
        }
    ]
}

function Invitation() {
    const [cookies] = useCookies(["language"])
    const language = selectLanguage(cookies)
    const [show, setShow] = useState(false)
    const [telNumbers, setTelNumbers] = useState([])

    const handleClose = () => setShow(false)
    const handleShow = (modalType) => {
        setTelNumbers(TEL_NUMBERS[modalType])
        setShow(true)
    }

    return (
        <>
            <div className={styles["sub-heading"]}>
            { Title[language].Heading() }
            </div>
            <Container className={styles['form-container']} style={{ marginBottom: '40px', maxWidth: '650px' }}>
                <Image src={ invitationImage } fluid />
            </Container>
            <Container style={{ marginBottom: '40px' }}>
                <Row>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={ telImage1 } />
                            <Card.Body style={{ textAlign: 'center' }}>
                                <Button variant="success" onClick={() => handleShow('tel1')}>{ Description[language].showNumbers() }</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={ telImage2 } />
                            <Card.Body  style={{ textAlign: 'center' }}>
                                <Button variant="success" onClick={() => handleShow('tel2')}>{ Description[language].showNumbers() }</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <Modal show={show} onHide={handleClose}>
                <Modal.Body>
                    {
                        telNumbers.map(item => {
                            return (
                                <div>
                                    { item.name }: <a href={`tel: ${ item.tel }`}>{ item.tel }</a>
                                </div>
                            )
                        })
                    }
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        { Description[language].close() }
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Invitation
