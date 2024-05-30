import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import User from '../lib/User.js'

const userController = {
    async postRegister(req, res) {
        await User.findOne({
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
                            .then(user => res.json(user))
                            .catch(err => console.log(err));
                    });
                });
            }
        })
    },

    async postLogin(req, res) {
        const email = req.body.email
        const password = req.body.pass

        await User.findOne({
            email: email
        }).then(user => {
            if (!user) {
                return res.status(403).send({
                    emailNotFound: 'Email not registered'
                })
            } else {
                //Match password
                bcrypt.compare(password, user.password)
                    .then(isMatch => {
                        if (isMatch) {
                            //Create JWT Payload
                            const payload = {
                                id: user.id,
                                name: user.name
                            }

                            //Sign Token
                            const token = jwt.sign(payload, 'secret')
                            const cookieCheck = req.cookies.accessToken
                            if (cookieCheck === undefined) {
                                return res.cookie('accessToken', token, {
                                    httpOnly: true,
                                    secure: process.env.NODE_ENV === 'production',
                                    sameSite: 'none',
                                    maxAge: 1000 * 60 * 60 * 24,
                                    path: '/'
                                })
                                .send('Cookie Set')
                            }
                        } else {
                            return res.status(400).send('Password invalid')
                        }
                    })
            }
        })
    },

    async getLogin(req, res) {
        const token = req.cookies.accessToken
        if (!token) {
            res.status(404).json({message: 'Token not found'})
        } else {
            try {
                const verified = jwt.verify(token, 'secret')
                if(!verified){
                    res.status(404).json({message: 'User Not Found'})
                } else {
                    return res.status(200).json({
                        name: verified.name,
                        token,
                        message: 'Token and User Verified'
                    })
                }
            } catch (error) {
                res.json({message: 'Token Invalid or Expired'})
            }
        }
    },

    async postLogout(req, res) {
        const cookiesToken = req.cookies.accessToken
        if(cookiesToken){
            return res.clearCookie('accessToken', { 
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'none',
                maxAge: 1000 * 60 * 60 * 24,
                path: '/'
            }).status(200).json({ message: 'Cookies Removed' })
        }
    }
}

export {
    userController
}