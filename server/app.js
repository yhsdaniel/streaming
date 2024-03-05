const express = require('express')
const router = require('./lib/router')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()
const { MONGODB_URI, PORT } = process.env

const app = express()

mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB is  connected successfully"))
  .catch((err) => console.error(err));

app.use(express.urlencoded({
    extended: false
}))
app.use(express.json())

app.use(
    cors({
        origin: ["streaming-front-three.vercel.app", "http://localhost:5173"],
        methods: ["POST", "GET"],
        credentials: true,
    })
);

app.use('/api', router)

// /* //Serve static assets if in production
// if (process.env.NODE_ENV = "production") {
//     app.use(express.static('client/build'));

//     app.get('*', (req, res) => {
//         res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
//     });
// }

app.listen(PORT, () => {
    console.log(`Server on running ${PORT}`)
})