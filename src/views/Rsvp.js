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
  const [loadingStoredRsvp, setLoadingStoredRsvp] = useState(true)
  const [rsvp, setRsvp] = useState({
    attending: false,
    vegetarian: false,
    plus1: false,
    tel: '',
    name: undefined,
    email: undefined
  })
  const [storedRsvp, setStoredRsvp] = useState(null)
  const hour = (new Date()).getHours()

  useEffect(() => {
    if (user) {
      setRsvp(prevRsvp => ({
        ...prevRsvp,
        name: user.name,
        email: user.email
      }))
    }
  }, [user])

  useEffect(() => {
    async function getStoredRsvp() {
      try {
        const response = await getAuthHttpClient(await getTokenSilently()).get('/rsvp', { params: { email: rsvp.email }})
        if (response.data.length > 0) {
          setStoredRsvp(response.data[0])
        }
        setLoadingStoredRsvp(false)
      } catch (err) {
        console.log(err)
      }
    }
    if (!loading) {
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
      setRsvp({ ...rsvp, attending: false })
      setStoredRsvp({ ...rsvp,
        attending: false,
        vegetarian: false,
        plus1: false,
        tel: ''
      })
      await getAuthHttpClient(await getTokenSilently()).put(`/rsvp?email=${rsvp.email}`, rsvp)
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
        { Title[language][hour > 18 ? 'evening' : (hour < 12 ? 'morning' : 'day')] } 
        {/* <img src={user.picture} alt="Rsvp" /> */}
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
                        { FormText[language].Menu }
                      </div>
                      <div key={`radio-vegetarian`} className="mb-3">
                        <Form.Check inline label="Standard" type={'radio'} id={`radio-vegetarian-1`} checked={rsvp.vegetarian === false} onChange={() => setRsvp({ ...rsvp, vegetarian: false })}/>
                        <Form.Check inline label="Vegetarian" type={'radio'} id={`radio-vegetarian-2`} checked={rsvp.vegetarian === true} onChange={() => setRsvp({ ...rsvp, vegetarian: true })}/>
                      </div>
                      <div className={styles['question']}>
                        { FormText[language].Plus1 }
                      </div>
                      <div key={`radio-plus1`} className="mb-3">
                        <Form.Check inline label="Nu" type={'radio'} id={`radio-plus1-1`} checked={rsvp.plus1 === false} onChange={() => setRsvp({ ...rsvp, plus1: false })}/>
                        <Form.Check inline label="Da" type={'radio'} id={`radio-plus1-2`} checked={rsvp.plus1 === true} onChange={() => setRsvp({ ...rsvp, plus1: true })}/>
                      </div>
                      <div className={styles['question']}>
                        { FormText[language].Tel }
                      </div>
                      <Form.Control type="text" placeholder="Tel" onChange={(e) => setRsvp({ ...rsvp, tel: e.target.value })}/>
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
                  { FormText[language].Vegetarian }: { FormText[language][storedRsvp.vegetarian.toString()] }
                </div>
              </Row>
              <Row style={{ paddingLeft: '15px' }}>
                <div className={styles['info']}>
                  Plus 1: { FormText[language][storedRsvp.plus1.toString()] }
                </div>
              </Row>
              <Row style={{ paddingLeft: '15px' }}>
                <div className={styles['info']}>
                  { FormText[language].Name }: { user.name }
                </div>
              </Row>
              <Row style={{ paddingLeft: '15px' }}>
                <div className={styles['info']}>
                  Email: { user.email }
                </div>
              </Row>
              <Row style={{ paddingLeft: '15px' }}>
                <div className={styles['info']}>
                  Tel: { storedRsvp.tel || '-' }
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
