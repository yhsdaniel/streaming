import express from 'express'
import { apiController } from '../controller/apiController.js'
import { userController } from '../controller/userController.js'
import { authUser } from '../middleware/authUser.js'
import dotenv from 'dotenv'
import cors from 'cors'

const router = express.Router()
dotenv.config()

const corsOptions = {
  origin: ['https://netex-app.vercel.app', 'http://localhost:5173'],
  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization', 'Access-Control-Allow-Origin', 'Access-Control-Request-Headers'],
  methods: 'GET,POST,PUT,HEAD,DELETE,OPTIONS',
  optionsSuccessStatus: 200 // Some legacy browsers choke on status 204
}

router.get('/', (req, res) => {
    res.send('HELLO')
})

router.post('/register', cors(corsOptions), userController.postRegister)
router.post('/login', cors(corsOptions), userController.postLogin)
router.get('/user', cors(corsOptions), userController.getLogin)
router.get('/logout', cors(corsOptions), userController.postLogout)

router.get('/requestTopRatedTVSeries', cors(corsOptions), apiController.requestTopRatedTVSeries)
router.get('/requestTrendingTVSeries', cors(corsOptions), apiController.requestTrendingTVSeries)
router.get('/requestPopularTVSeries', cors(corsOptions), apiController.requestPopularTVSeries)

router.get('/requestPopularMovies', cors(corsOptions), apiController.requestPopularMovies)
router.get('/requestTopRatedMovies', cors(corsOptions), apiController.requestTopRatedMovies)
router.get('/requestUpcomingMovies', cors(corsOptions), apiController.requestUpcomingMovies)

router.post('/requestAllDay', cors(corsOptions), apiController.requestAllDay)

export default router