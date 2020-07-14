const MongoClient = require('mongodb').MongoClient
const dbName = 'otilia-and-vlad'
const MONGODB_URI = process.env.MONGODB_URI
const middy = require('middy')

let cachedDb = null

const VALID_REFERERS = [
  'http://localhost:8888/rsvp',
  'https://www.the-savins.com/rsvp',
  'http://localhost:8888/report?token=oansbfbq24871qdn',
  'https://www.the-savins.com/report?token=oansbfbq24871qdn'
]

const DB_OPTIONS = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  validateOptions: true,
  bufferMaxEntries: 0,
  loggerLevel: 'warn',
  keepAlive: true,
  poolSize: 10,
  family: 4,
  ha: true
}

function checkAuth (event) {
  return new Promise((resolve, reject) => {
    if (!event.headers.authorization) {
      const reason = 'Missing event.headers.authorization. You must be signed in to call this function.'
      return reject(new Error(reason))
    }
    const token = event.headers.authorization.substring(7)
    if (token.length === 32 && VALID_REFERERS.includes(event.headers.referer)) {
      return resolve()
    }
    return reject(new Error('Invalid auth token.'))
  })
}

function connectToDatabase (uri) {
  console.log('=> connect to database')
  if (cachedDb) {
    console.log('=> using cached database instance')
    return Promise.resolve(cachedDb)

  }
  return MongoClient.connect(uri, DB_OPTIONS)
    .then(client => {
      cachedDb = client.db(dbName)
      return cachedDb
    })
}

function fetchRsvp (db, params = {}) {
  console.log('=> query database')
  return db.collection('rsvp').find(params).toArray()
    .then((results) => { return { statusCode: 200, body: JSON.stringify(results) } })
    .catch(err => {
      console.log('=> an error occurred: ', err)
      return { statusCode: 500, body: 'error' }
    })
}

function putRsvp (db, params = {}, body = { attending: false }) {
  console.log('=> query database')
  return db.collection('rsvp').updateOne(params, {$set: JSON.parse(body)}, { upsert: true })
    .then(() => { return { statusCode: 204, body: '' } })
    .catch(err => {
      console.log('=> an error occurred: ', err)
      return { statusCode: 500, body: 'error' }
    })
}

const rsvpController = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false
  console.log('event: ', event)

  connectToDatabase(MONGODB_URI)
    .then(db => {
      switch (event.httpMethod) {
        case 'GET':
          return fetchRsvp(db, event.queryStringParameters)
        case 'PUT':
          return putRsvp(db, event.queryStringParameters, event.body)
        default:
          return null
      }
    })
    .then(result => {
      console.log('=> returning result: ', result)
      callback(null, result)
    })
    .catch(err => {
      console.log('=> an error occurred: ', err)
      callback(err)
    })
}

exports.handler = middy(rsvpController).use({
  before: (handler, next) => {
    checkAuth(handler.event).then(() => {
      next()
    }).catch((e) => {
      console.log('throw e', e)
      return handler.callback(null, {
        statusCode: 401,
        body: JSON.stringify({
          auth: 'no',
          message: e.message
        })
      })
    })
  }
})