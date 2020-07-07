import React, { useState, useEffect } from "react"
import Spinner from 'react-bootstrap/Spinner'
import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container'
import { useAuth0 } from "../react-auth0-spa"
import { getAuthHttpClient } from "../utils/httpClient"

const DEFAULT_SUMMARY = {
  total: 0,
  attending: 0,
  notAttending: 0,
  standard: 0,
  vegetarian: 0,
  lactoVegetarian: 0,
  single: 0,
  plus1: 0
}

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

const calculateSummary = (rsvpList) => {
  const summary = DEFAULT_SUMMARY
  rsvpList.forEach(rsvp => {
    summary.total += 1
    if (rsvp.attending) {
      summary.attending += 1
    } else {
      summary.notAttending += 1
    }
    if (rsvp.meal1 === 'standard') {
      summary.standard += 1
    }
    if (rsvp.meal2 === 'standard') {
      summary.standard += 1
    }
    if (rsvp.meal1 === 'vegetarian') {
      summary.vegetarian += 1
    }
    if (rsvp.meal2 === 'vegetarian') {
      summary.vegetarian += 1
    }
    if (rsvp.meal1 === 'lacto-vegetarian') {
      summary.lactoVegetarian += 1
    }
    if (rsvp.meal2 === 'lacto-vegetarian') {
      summary.lactoVegetarian += 1
    }
    if (rsvp.plus1) {
      summary.attending += 1
      summary.plus1 += 1
    } else {
      summary.single += 1
    }
  })
  return summary
}

const Report = () => {
  const { loading, getTokenSilently } = useAuth0()
  const [loadingStoredRsvp, setLoadingStoredRsvp] = useState(true)
  const [rsvpList, setRsvpList] = useState([])
  const [summary, setSummary] = useState(DEFAULT_SUMMARY)

  useEffect(() => {
    async function getStoredRsvp() {
      try {
        const response = await getAuthHttpClient(await getTokenSilently()).get('/rsvp')
        if (response.data.length > 0) {
          setRsvpList(response.data)
          setSummary(calculateSummary(response.data))
        }
        setLoadingStoredRsvp(false)
      } catch (err) {
        console.log(err)
      }
    }
    if (!loading) {
      getStoredRsvp()
    }
  }, [loading, getTokenSilently])

  if (loading || loadingStoredRsvp) {
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
    <Container>
      <div style={{ margin: '40px 0' }}>
        <h3>
          SUMMARY
        </h3>
        <Table responsive>
          <thead>
            <tr>
              <th>Total RSVPs</th>
              <th>Attending</th>
              <th>Not Attending</th>
              <th>Standard Meal</th>
              <th>Vegetarian</th>
              <th>Lacto Vegetarian</th>
              <th>Single</th>
              <th>Plus1</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{ summary.total }</td>
              <td>{ summary.attending }</td>
              <td>{ summary.notAttending }</td>
              <td>{ summary.standard }</td>
              <td>{ summary.vegetarian }</td>
              <td>{ summary.lactoVegetarian }</td>
              <td>{ summary.single }</td>
              <td>{ summary.plus1 }</td>
            </tr>
          </tbody>
        </Table>
      </div>
      <hr/>
      <div style={{ marginTop: '40px' }}>
        <h3>
          RSVPs
        </h3>
      </div>
      <Table responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Attending</th>
            <th>Meal</th>
            <th>Plus1</th>
            <th>Plus1 Name</th>
            <th>Plus1 Meal</th>
            <th>Tel</th>
            <th>Mentions</th>
          </tr>
        </thead>
        <tbody>
          {
            rsvpList.map((rsvp, idx) => {
              return (
                <tr key={idx}>
                  <td>{ idx + 1 }</td>
                  <td>{ createUserName(rsvp.lastName1, rsvp.firstName1) }</td>
                  <td>{ rsvp.email }</td>
                  <td>{ rsvp.attending.toString() }</td>
                  <td>{ rsvp.meal1 }</td>
                  <td>{ rsvp.plus1.toString() }</td>
                  <td>{ createUserName(rsvp.lastName2, rsvp.firstName2) || '-' }</td>
                  <td>{ rsvp.meal2 || '-' }</td>
                  <td>{ rsvp.tel || '-' }</td>
                  <td>{ rsvp.mentions || '-' }</td>
                </tr>
              )
            })
          }
        </tbody>
      </Table>
    </Container>
  )
}

export default Report