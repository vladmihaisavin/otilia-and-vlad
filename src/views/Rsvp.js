import React, { useState, useEffect } from "react"
import { useCookies } from "react-cookie"
import { selectLanguage } from "../utils/cookies"
import Spinner from 'react-bootstrap/Spinner'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { useAuth0 } from "../react-auth0-spa"
import { getAuthHttpClient } from "../utils/httpClient"
import { Title, Form as FormText } from "../content/Rsvp"
import Background from '../photos/rsvp.jpg'
import styles from "./Rsvp.module.scss"

const Rsvp = () => {
  const { loading, user, getTokenSilently } = useAuth0()
  const [cookies] = useCookies(["language"])
  const language = selectLanguage(cookies)
  const [rsvp, setRsvp] = useState({
    attending: false,
    vegetarian: false,
    plus1: false
  })

  useEffect(() => {
    if (user) {
      setRsvp(prevRsvp => ({
        ...prevRsvp,
        name: user.name,
        email: user.email
      }))
    }
  }, [user])

  const submitForm = async () => {
      try {
        console.log(rsvp)
        const response = await getAuthHttpClient(await getTokenSilently()).get('/rsvp', { params: { email: rsvp.email }})
        console.log(response)
      } catch (err) {
        console.log(err)
      }
  }

  if (loading || !user) {
    return <div style={{ 
      display: 'flex',
      flexflow: 'row nowrap',
      placeContent: 'center',
      alignItems: 'center',
      height: '100%',
      }}>
        <Spinner animation="grow" variant="primary" />
      </div>
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
      <h2>
        <img src={user.picture} alt="Rsvp" />
        {user.name}
      </h2>
      <p>{user.email}</p>
      <code>{JSON.stringify(user, null, 2)}</code>

      <div className={styles["sub-heading"]}>
        { Title[language].SubHeading() }
      </div>
      <Container className={styles['form-container']}>
        <Row style={{ placeContent: 'center' }}>
          <div className={styles['question']}>
            { FormText[language].AttendQ }
          </div>
        </Row>
        <Row style={{ placeContent: 'center' }}>
            <Button variant="success" style={{ width: '100px', marginRight: '20px' }} onClick={() => setRsvp({ ...rsvp, attending: true})}>{ FormText[language].Yes }</Button>
            <Button variant="secondary" style={{ width: '100px' }} onClick={() => setRsvp({ ...rsvp, attending: false})}>{ FormText[language].No }</Button>
        </Row>
        {
          rsvp.attending
            ? 
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <div className={styles['question']}>
                  { FormText[language].Menu }
                </div>
                <div key={`inline-${'radio'}`} className="mb-3">
                  <Form.Check inline label="Standard" type={'radio'} id={`inline-${'radio'}-1`} checked={rsvp.vegetarian === false} onChange={() => setRsvp({ ...rsvp, vegetarian: false })}/>
                  <Form.Check inline label="Vegetarian" type={'radio'} id={`inline-${'radio'}-2`} checked={rsvp.vegetarian === true} onChange={() => setRsvp({ ...rsvp, vegetarian: true })}/>
                </div>
            </div> : ''
        }
        <div style={{ textAlign: 'center', margin: '20px 0 20px 0' }}>
          <Button variant="primary" style={{ width: '200px' }} onClick={submitForm}>{ FormText[language].Submit }</Button>
        </div>
      </Container>
    </div>
  )
}

export default Rsvp
