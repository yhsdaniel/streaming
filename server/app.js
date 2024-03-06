const express = require('express')
const router = require('./lib/router')
const cors = require('cors')
const http = require('http')
const mongoose = require('mongoose')
require('dotenv').config()
const {
  MONGODB_URI
} = process.env
const port = process.env.PORT || 5000

const app = express()

app.use(express.urlencoded({
  extended: false
}))
app.use(express.json())
app.use(cookieParser());
app.use(cors())

// app.use(
//   cors({
//     origin: ["streaming-front-three.vercel.app", "http://localhost:5173"],
//     methods: ["POST", "GET"],
//     credentials: true,
//   })
// );

const server = http.createServer(app);

app.use('/api', router)

// /* //Serve static assets if in production
// if (process.env.NODE_ENV = "production") {
//     app.use(express.static('client/build'));

//     app.get('*', (req, res) => {
//         res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
//     });
// }

mongoose.connect(MONGODB_URI, {
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