import React, { useState, useEffect } from "react"
import { useAuth0 } from "../react-auth0-spa"
import { getAuthHttpClient } from "../utils/httpClient"

const Rsvp = () => {
  const { loading, user, getTokenSilently } = useAuth0()
  const [rsvp, setRsvp] = useState({
    attending: false,
    vegetarian: false,
    plus1: false
  })

  useEffect(() => {
    setRsvp(prevRsvp => ({
      ...prevRsvp,
      name: user ? user.name : ''
    }))
  }, [user])

  const testApi = async () => {
      try {
        console.log(rsvp)
        const response = await getAuthHttpClient(await getTokenSilently({
          audience: `www.the-savins.com`
        })).get('/rsvp')
        console.log(response)
      } catch (err) {
        console.log(err)
      }
  }

  if (loading || !user) {
    return <div>Loading...</div>
  }

  return (
    <>
      <h2>
        <img src={user.picture} alt="Rsvp" />
        {user.name}
      </h2>
      <p>{user.email}</p>
      <code>{JSON.stringify(user, null, 2)}</code>
      <button onClick={testApi}>Test</button>
    </>
  )
}

export default Rsvp
