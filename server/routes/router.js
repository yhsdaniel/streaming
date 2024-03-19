import express from 'express'
import { apiController } from '../controller/apiController.js'
import { userController } from '../controller/userController.js'
import { authUser } from '../middleware/authUser.js'
import dotenv from 'dotenv'

const router = express.Router()
dotenv.config()

router.post('/register', userController.postRegister)
router.post('/login', userController.postLogin)
router.get('/user', authUser.authLogin, userController.getLogin)
router.get('/logout', userController.postLogout)

router.get('/requestTopRatedTVSeries', apiController.requestTopRatedTVSeries)
router.get('/requestTrendingTVSeries', apiController.requestTrendingTVSeries)
router.get('/requestPopularTVSeries', apiController.requestPopularTVSeries)

router.get('/requestPopularMovies', apiController.requestPopularMovies)
router.get('/requestTopRatedMovies', apiController.requestTopRatedMovies)
router.get('/requestUpcomingMovies', apiController.requestUpcomingMovies)

router.get('/requestAllDay', apiController.requestAllDay)

export default router