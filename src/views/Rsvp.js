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

  useEffect(() => {
    const getUserMetadata = async () => {
      const domain = "dev-cytlmsok.auth0.com";
  
      try {
        const accessToken = await getTokenSilently({
          audience: `www.the-savins.com`
        });
  
        console.log('accessToken', accessToken)
        const userDetailsByIdUrl = `https://${domain}/api/v2/users/${user.sub}`;
  
        const metadataResponse = await fetch(userDetailsByIdUrl, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
  
        const { user_metadata } = await metadataResponse.json();
  
        console.log(user_metadata);
      } catch (e) {
        console.log('accessTokens')
        console.log(e);
      }
    };
  
    getUserMetadata();
  }, [rsvp]);

  const testApi = async () => {
      try {
        console.log('token', rsvp, await getTokenSilently())
        const response = await getAuthHttpClient(await getTokenSilently()).get('/rsvp')
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
