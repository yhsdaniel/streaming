import express, { urlencoded, json } from 'express'
import router from './lib/router.js'
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
  origin: ['https://streaming-front-three.vercel.app', 'http://localhost:5173']
}))

// app.use(
//   cors({
//     origin: ["streaming-front-three.vercel.app", "http://localhost:5173"],
//     methods: ["POST", "GET"],
//     credentials: true,
//   })
// );

const server = createServer(app);

app.use('/', router)

// /* //Serve static assets if in production
// if (process.env.NODE_ENV = "production") {
//     app.use(express.static('client/build'));

//     app.get('*', (req, res) => {
//         res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
//     });
// }

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

// app.listen(port, () => {
//   console.log(`Server is listening on port ${port}`)
// })