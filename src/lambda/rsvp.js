const MongoClient = require('mongodb').MongoClient
const dbName = 'otilia-and-vlad'
const MONGODB_URI = `mongodb+srv://otilia-and-vlad:asd123@cluster0.pe27y.mongodb.net/${dbName}?retryWrites=true&w=majority`
const middy = require('middy')
const authMiddleware = require('./middleware/auth')

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

const rsvpController = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false
  console.log('event: ', event)

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

exports.handler = middy(rsvpController).use(authMiddleware())