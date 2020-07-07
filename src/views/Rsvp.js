import React, { useState, useEffect } from "react"
import { useCookies } from "react-cookie"
import { selectLanguage } from "../utils/cookies"
import Spinner from 'react-bootstrap/Spinner'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useAuth0 } from "../react-auth0-spa"
import { getAuthHttpClient } from "../utils/httpClient"
import { Title, Form as FormText } from "../content/Rsvp"
import Background from '../photos/rsvp.jpg'
import styles from "./Rsvp.module.scss"

const createUserName = (firstName, lastName) => {
  if (firstName && lastName) {
    return `${firstName} ${lastName}`
  } else if(firstName) {
    return firstName
  } else if (lastName) {
    return lastName
  } else {
    return ''
  }
}

const Rsvp = () => {
  const { loading, user, getTokenSilently } = useAuth0()
  const [cookies] = useCookies(["language"])
  const language = selectLanguage(cookies)
  const [loadingStoredRsvp, setLoadingStoredRsvp] = useState(true)
  const [rsvp, setRsvp] = useState({
    attending: false,
    meal1: 'standard',
    meal2: '',
    plus1: false,
    tel: '',
    mentions: '',
    firstName1: '',
    lastName1: '',
    firstName2: '',
    lastName2: '',
    email: undefined
  })
  const [storedRsvp, setStoredRsvp] = useState(null)
  const hour = (new Date()).getHours()

  useEffect(() => {
    if (user) {
      setRsvp(prevRsvp => ({
        ...prevRsvp,
        firstName1: createUserName(user.given_name, user.middle_name) || '',
        lastName1: user.family_name || '',
        email: user.email
      }))
    }
  }, [user])

  useEffect(() => {
    async function getStoredRsvp() {
      try {
        const response = await getAuthHttpClient(await getTokenSilently()).get('/rsvp', { params: { email: rsvp.email }})
        if (response.data.length > 0) {
          delete response.data[0]._id
          setStoredRsvp(response.data[0])
          setRsvp(response.data[0])
        }
        setLoadingStoredRsvp(false)
      } catch (err) {
        console.log(err)
      }
    }
    if (!loading && rsvp.email) {
      getStoredRsvp()
    }
  }, [loading, getTokenSilently, rsvp.email])

  const submitForm = async () => {
    try {
      setLoadingStoredRsvp(true)
      await getAuthHttpClient(await getTokenSilently()).put(`/rsvp?email=${rsvp.email}`, rsvp)
      setLoadingStoredRsvp(false)
      setStoredRsvp(rsvp)
    } catch (err) {
      console.log(err)
    }
  }

  const notAttendingCallback = async () => {
    try {
      setLoadingStoredRsvp(true)
      const newRsvp = { ...rsvp,
        attending: false,
        meal1: '',
        meal2: '',
        plus1: false,
        firstName2: '',
        lastName2: '',
        tel: '',
        mentions: ''
      }
      setRsvp(newRsvp)
      setStoredRsvp(newRsvp)
      await getAuthHttpClient(await getTokenSilently()).put(`/rsvp?email=${rsvp.email}`, newRsvp)
      setLoadingStoredRsvp(false)
    } catch (err) {
      console.log(err)
    }
  }

  if (loading || loadingStoredRsvp || !user) {
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
      <h2 style={{ marginTop: '50px' }}>
        { Title[language][hour > 17 ? 'evening' : (hour < 12 ? 'morning' : 'day')] }
        {user.name}!
      </h2>
      { storedRsvp === null
          ? <>
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
                  <Button variant="secondary" style={{ width: '100px' }} onClick={notAttendingCallback}>{ FormText[language].No }</Button>
              </Row>
              {
                rsvp.attending
                  ? 
                  <div style={{ textAlign: 'center', marginTop: '20px' }}>
                    <div className={styles['question']}>
                      { FormText[language].FullName1 }
                    </div>
                    <Row>
                      <Col>
                        <Form.Control type="text" value={ rsvp.lastName1 } placeholder={ FormText[language].LastName } onChange={(e) => setRsvp({ ...rsvp, lastName1: e.target.value })}/>
                      </Col>
                      <Col>
                        <Form.Control type="text" value={ rsvp.firstName1 } placeholder={ FormText[language].FirstName } onChange={(e) => setRsvp({ ...rsvp, firstName1: e.target.value })}/>
                      </Col>
                    </Row>
                    <div className={styles['question']}>
                      { FormText[language].Menu }
                    </div>
                    <div key={`radio-meal`} className="mb-3">
                      <Form.Check inline label="Standard" type={'radio'} id={`radio-meal-1`} checked={rsvp.meal1 === 'standard'} onChange={() => setRsvp({ ...rsvp, meal1: 'standard' })}/>
                      <Form.Check inline label="Vegetarian" type={'radio'} id={`radio-meal-2`} checked={rsvp.meal1 === 'vegetarian'} onChange={() => setRsvp({ ...rsvp, meal1: 'vegetarian' })}/>
                      <Form.Check inline label="Lacto Vegetarian" type={'radio'} id={`radio-meal-3`} checked={rsvp.meal1 === 'lacto-vegetarian'} onChange={() => setRsvp({ ...rsvp, meal1: 'lacto-vegetarian' })}/>
                    </div>
                    <div className={styles['question']}>
                      { FormText[language].Plus1 }
                    </div>
                    <div key={`radio-plus1`} className="mb-3">
                      <Form.Check inline label="Nu" type={'radio'} id={`radio-plus1-1`} checked={rsvp.plus1 === false} onChange={() => setRsvp({ ...rsvp, plus1: false, meal2: '' })}/>
                      <Form.Check inline label="Da" type={'radio'} id={`radio-plus1-2`} checked={rsvp.plus1 === true} onChange={() => setRsvp({ ...rsvp, plus1: true, meal2: 'standard' })}/>
                    </div>
                    {
                      rsvp.plus1
                        ? <>
                          <div className={styles['question']}>
                            { FormText[language].FullName2 }
                          </div>
                          <Row>
                            <Col>
                              <Form.Control type="text" value={ rsvp.lastName2 } placeholder={ FormText[language].LastName } onChange={(e) => setRsvp({ ...rsvp, lastName2: e.target.value })}/>
                            </Col>
                            <Col>
                              <Form.Control type="text" value={ rsvp.firstName2 } placeholder={ FormText[language].FirstName } onChange={(e) => setRsvp({ ...rsvp, firstName2: e.target.value })}/>
                            </Col>
                          </Row>
                          <div className={styles['question']}>
                            { FormText[language].Menu2 }
                          </div>
                          <div key={`radio-meal-partner`} className="mb-3">
                            <Form.Check inline label="Standard" type={'radio'} id={`radio-meal-partner-1`} checked={rsvp.meal2 === 'standard'} onChange={() => setRsvp({ ...rsvp, meal2: 'standard' })}/>
                            <Form.Check inline label="Vegetarian" type={'radio'} id={`radio-meal-partner-2`} checked={rsvp.meal2 === 'vegetarian'} onChange={() => setRsvp({ ...rsvp, meal2: 'vegetarian' })}/>
                            <Form.Check inline label="Lacto Vegetarian" type={'radio'} id={`radio-meal-partner-3`} checked={rsvp.meal2 === 'lacto-vegetarian'} onChange={() => setRsvp({ ...rsvp, meal2: 'lacto-vegetarian' })}/>
                          </div>
                        </> : ''
                    }
                    <div className={styles['question']}>
                      { FormText[language].Tel }
                    </div>
                    <Form.Control type="text" value={ rsvp.tel } placeholder="Tel" onChange={(e) => setRsvp({ ...rsvp, tel: e.target.value })}/>
                    <div className={styles['question']}>
                      { FormText[language].MentionsQ }
                    </div>
                    <Form.Control type="text" value={ rsvp.mentions } placeholder={ FormText[language].MentionsPlaceholder } onChange={(e) => setRsvp({ ...rsvp, mentions: e.target.value })}/>
                  </div> : ''
              }
              <div style={{ textAlign: 'center', margin: '20px 0 20px 0' }}>
                <Button variant="primary" style={{ width: '200px' }} onClick={submitForm}>{ FormText[language].Submit }</Button>
              </div>
            </Container>
          </> : <>
            <div className={styles["sub-heading"]}>
              { Title[language].SubHeading2(storedRsvp.attending) }
            </div>
            <Container className={styles['form-container']}>
              <Row style={{ placeContent: 'center' }}>
                <div className={styles['question']}>
                  { Title[language].OverviewHeader() }
                </div>
              </Row>
              <Row style={{ paddingLeft: '15px' }}>
                <div className={styles['info']}>
                  { FormText[language].Attending }: { FormText[language][storedRsvp.attending.toString()] }
                </div>
              </Row>
              <Row style={{ paddingLeft: '15px' }}>
                <div className={styles['info']}>
                  { FormText[language].Meal }: { `${FormText[language][storedRsvp.meal1]}${ storedRsvp.meal2 ? ` ${FormText[language].and} ${FormText[language][storedRsvp.meal2]}` : '' }` }
                </div>
              </Row>
              <Row style={{ paddingLeft: '15px' }}>
                <div className={styles['info']}>
                  Plus 1: { FormText[language][storedRsvp.plus1.toString()] }
                </div>
              </Row>
              <Row style={{ paddingLeft: '15px' }}>
                <div className={styles['info']}>
                  { FormText[language].Name }: { `${createUserName(storedRsvp.lastName1, storedRsvp.firstName1)}${ storedRsvp.lastName2 ? ` ${FormText[language].and} ${createUserName(storedRsvp.lastName2, storedRsvp.firstName2)}` : ''}` }
                </div>
              </Row>
              <Row style={{ paddingLeft: '15px' }}>
                <div className={styles['info']}>
                  Email: { storedRsvp.email }
                </div>
              </Row>
              <Row style={{ paddingLeft: '15px' }}>
                <div className={styles['info']}>
                  Tel: { storedRsvp.tel || '-' }
                </div>
              </Row>
              <Row style={{ paddingLeft: '15px' }}>
                <div className={styles['info']}>
                  { FormText[language].Mentions }: { storedRsvp.mentions || '-' }
                </div>
              </Row>
            </Container>
            <div className={styles["sub-heading"]}>
              { Title[language].Footer() }
            </div>
            <div style={{ textAlign: 'center', margin: '20px 0 20px 0' }}>
              <Button variant="primary" style={{ width: '200px' }} onClick={() => setStoredRsvp(null)}>{ FormText[language].ChangeInfo }</Button>
            </div>
          </>
      }
    </div>
  )
}

export default Rsvp
