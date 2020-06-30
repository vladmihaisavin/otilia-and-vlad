const jwt = require('jsonwebtoken')
const jwksClient = require('jwks-rsa')

/* initialize the JWKS client */
const authClient = jwksClient({
  cache: true,
  jwksUri: `https://dev-cytlmsok.auth0.com/.well-known/jwks.json`,
  audience: 'www.the-savins.com',
  issuer: 'https://dev-cytlmsok.auth0.com/',
})

/* Check authorization JWT */
export default function checkAuth(event) {
  const alg = 'RS256' // algorithm is RSA http://bit.ly/2xAYygk
  return new Promise((resolve, reject) => {
    console.log('event.headers', event.headers)
    if (!event.headers.authorization) {
      const reason = 'Missing event.headers.authorization. You must be signed in to call this function'
      return reject(new Error(reason))
    }
    console.log('event.headers', event.headers)
    // remove "bearer " word from token
    const authToken = event.headers.authorization.substring(7)

    // Validate Token is not malformed. AKA fail fast
    let decodedToken
    try {
      decodedToken = jwt.decode(authToken, { complete: true })
    } catch (err) {
      console.log(err)
      return reject(new Error('JWT token is malformed'))
    }

    if (!decodedToken || !decodedToken.header || !decodedToken.header.kid) {
      return reject(new Error('JWT token is malformed'))
    }

    const kid = decodedToken.header.kid
    console.log('kid', kid)
    // Get Signing key from auth0
    authClient.getSigningKey(kid, (signError, key) => {
      if (signError) {
        console.log('signing key error', signError)
        return reject(new Error('signing key error'))
      }

      const signingKey = key.publicKey || key.rsaPublicKey
      const opts = { algorithms: alg }

      // Now Verify the jwt token is valid
      try {
        jwt.verify(authToken, signingKey, opts, (verifyError, decoded) => {
          if (verifyError) {
            console.log('Token signature NOT VERIFIED', verifyError)
            return reject(new Error('Token signature NOT VERIFIED'))
          }
          // output for logs
          console.log('------------------')
          console.log('decoded jwt token')
          console.log(decoded)
          console.log('------------------')

          if (!decoded.email_verified) {
            console.log('User has not verified email yet', decoded)
            return reject(`Email not verified`)
          }

          // Everything is ok!
          return resolve(decoded)
        })
      } catch (err) {
        console.log('jwt.verify exception', err)
        return reject(err)
      }
    })
  })
}