const MongoClient = require('mongodb').MongoClient
const dbName = 'otilia-and-vlad'
const MONGODB_URI = `mongodb+srv://otilia-and-vlad:asd123@cluster0.pe27y.mongodb.net/${dbName}?retryWrites=true&w=majority`

// const jwtCheck = jwt({
//   secret: jwks.expressJwtSecret({
//       cache: true,
//       rateLimit: true,
//       jwksRequestsPerMinute: 5,
//       jwksUri: 'https://dev-cytlmsok.auth0.com/.well-known/jwks.json'
//   }),
//   audience: 'www.the-savins.com',
//   issuer: 'https://dev-cytlmsok.auth0.com/',
//   algorithms: ['RS256']
// })
const jwt = require('jsonwebtoken')
const jwksClient = require('jwks-rsa')
const client = jwksClient({
  jwksUri: 'https://dev-cytlmsok.auth0.com/.well-known/jwks.json'
})
let cachedDb = null

function connectToDatabase (uri) {
  console.log('=> connect to database')
  if (cachedDb) {
    console.log('=> using cached database instance')
    return Promise.resolve(cachedDb)

  }
  return MongoClient.connect(uri)
    .then(client => {
      cachedDb = client.db(dbName)
      return cachedDb
    })
}

function listRsvp (db) {
  console.log('=> query database')
  return db.collection('rsvp').find({}).toArray()
    .then((results) => { return { statusCode: 200, body: JSON.stringify(results) } })
    .catch(err => {
      console.log('=> an error occurred: ', err)
      return { statusCode: 500, body: 'error' }
    })
}

module.exports.handler = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false
  console.log('event: ', event)
  // console.log(jwtCheck(event))

  function getKey(header, callback){
    console.log(header) 
    client.getSigningKey(header.kid, function(err, key) {
      var signingKey = key.publicKey || key.rsaPublicKey;
      callback(null, signingKey);
    });
  }
  jwt.verify(event.headers.authorization.split('Bearer ')[1], getKey, {}, function(err, decoded) {
    console.log(err)
    console.log(event.headers.authorization.split('Bearer ')[1])
    console.log(decoded)
  })

  connectToDatabase(MONGODB_URI)
    .then(db => listRsvp(db))
    .then(result => {
      console.log('=> returning result: ', result)
      callback(null, result)
    })
    .catch(err => {
      console.log('=> an error occurred: ', err)
      callback(err)
    })
}