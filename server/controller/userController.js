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
                            return res.cookie('accessToken', token, {
                                secure: true,
                                sameSite: 'none',
                                expires: new Date(Date.now() + 1 * 3600000)
                            }).json({ success: true })
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
            res.status(401).send('JWT codes not found')
            return
        } else {
            try {
                const verified = jwt.verify(token, 'secret')
                res.json({
                    name: verified.name,
                    token: token
                })
            } catch (error) {
                if(error instanceof jwt.TokenExpiredError){
                    return res.status(401).send('JWT token has expried')
                }
                res.status(403).send('Invalid JWT token')
            }
        }
    },

    async postLogout(req, res) {
        res.clearCookie('accessToken')
        res.send('cookies cleared')
    }
}

export {
    userController
}