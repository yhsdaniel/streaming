import express from 'express'
import config from 'config'
import { apiController } from '../controller/apiController.js'
import { userController } from '../controller/userController.js'
import dotenv from 'dotenv'
import { authUser } from '../middleware/authUser.js'

const router = express.Router()
dotenv.config()

router.post('/register', userController.postRegister)
router.post('/login', userController.postLogin)
router.get('/user', authUser.authLogin, userController.getLogin)
router.get('/logout', userController.postLogout)

router.get('/requestPopularMovies', apiController.requestPopularMovies)
router.get('/requestTopRatedTVSeries', apiController.requestTopRatedTVSeries)
router.get('/requestTrendingTVSeries', apiController.requestTrendingTVSeries)
router.get('/requestAllDay', apiController.requestAllDay)

export default router