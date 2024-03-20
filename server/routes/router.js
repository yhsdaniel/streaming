import express from 'express'
import { apiController } from '../controller/apiController.js'
import { userController } from '../controller/userController.js'
import { authUser } from '../middleware/authUser.js'
import dotenv from 'dotenv'

const router = express.Router()
dotenv.config()

router.post('/register', userController.postRegister)
router.post('/login', userController.postLogin)
router.get('/user', userController.getLogin)
router.get('/logout', userController.postLogout)

router.post('/requestTopRatedTVSeries', apiController.requestTopRatedTVSeries)
router.post('/requestTrendingTVSeries', apiController.requestTrendingTVSeries)
router.post('/requestPopularTVSeries', apiController.requestPopularTVSeries)

router.post('/requestPopularMovies', apiController.requestPopularMovies)
router.post('/requestTopRatedMovies', apiController.requestTopRatedMovies)
router.post('/requestUpcomingMovies', apiController.requestUpcomingMovies)

router.post('/requestAllDay', apiController.requestAllDay)

export default router