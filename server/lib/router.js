import express from 'express'
import axios from 'axios'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import config from 'config'
import User from './User.js'
import dotenv from 'dotenv'

const router = express.Router()
dotenv.config()

const key = 'b5dc2ae423fdfd220737f5f979a6c7c1'

router.get('/', async (_req, res) => {
    try {
        res.status(200).json('Hello World')
    } catch (error) {
        console.log(error)
    }
})

router.get('/requestPopularMovies', async (_req, res) => {
    try {
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`).then(response => {
            res.status(200).json(response.data.results)
        })
    } catch (error) {
        console.log(error)
    }
})

router.get('/requestTopRatedTVSeries', async (_req, res) => {
    try {
        axios.get(`https://api.themoviedb.org/3/tv/top_rated?api_key=${key}&language=en-US&page=1`).then(response => {
            res.status(200).json(response.data.results)
        })
    } catch (error) {
        console.log(error)
    }
})

router.get('/requestTrendingTVSeries', async (_req, res) => {
    try {
        axios.get(`https://api.themoviedb.org/3/trending/tv/day?api_key=${key}&language=en-US`).then(response => {
            res.status(200).json(response.data.results)
        })
    } catch (error) {
        console.log(error)
    }
})

router.get('/requestAllDay', async (_req, res) => {
    try {
        axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${key}&language=en-US`).then(response => {
            res.status(200).json(response.data.results)
        })
    } catch (error) {
        console.log(error)
    }
})

router.post('/register', (req, res) => {
    User.findOne({
        email: req.body.email
    }).then(user => {
        if (user) {
            return res.status(400).json({
                email: "Email already exists"
            })
        } else {
            const newUser = new User({
                name: req.body.name,
                email: req.body.email,
                password: req.body.pass
            })
            
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err;
                    newUser.password = hash;
                    newUser.save()
                        .then(user => res.json(user)
                            // res.redirect('/users/login')
                        )
                        .catch(err => console.log(err));
                });
            });
        }
    })
})

router.post('/login', (req, res) => {
    const email = req.body.email
    const password = req.body.pass
    
    User.findOne({
        email: email
    }).then(user => {
        if (!user) {
            return res.status(404).json({
                emailNotFound: 'Email not registered'
            })
        }

        //Match password
        bcrypt.compare(password, user.password)
            .then(isMatch => {
                if(isMatch){
                    //Create JWT Payload
                    const payload = {
                        id: user.id,
                        name: user.name
                    }

                    //Sign Token
                    jwt.sign(payload, 'secret', {
                        expiresIn: 63113852 //2 years in seconds
                    }, (err, token) => {
                        res.json({
                            success: true,
                            token: "Bearer" + token
                        })
                    })
                }
            })
    })
})

export default router