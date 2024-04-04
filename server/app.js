import express, { urlencoded, json } from 'express'
import router from './routes/router.js'
import cors from 'cors'
import { createServer } from 'http'
import cookieparser from 'cookie-parser'
import { connect } from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const {
  MONGODB_URI
} = process.env
const port = process.env.PORT || 5000

const app = express()

app.use(urlencoded({
  extended: false
}))
app.use(json())
app.use(cookieparser());
app.use(cors({
  origin: ['https://netex-app.vercel.app', 'http://localhost:5173'],
  credentials: true,
  allowedHeaders: [
    "set-cookie",
    "Content-Type",
    "Access-Control-Allow-Origin",
    "Access-Control-Allow-Headers"
  ]
}))

const server = createServer(app);

app.use('/', router)

connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB is  connected successfully")
    server.listen(port, () => {
      console.log(`Server is listening on port ${port}`)
    })
  })
  .catch((err) => {
    console.error(err)
    process.exit(1)
  });