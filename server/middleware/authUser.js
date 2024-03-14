import jwt from 'jsonwebtoken'

const authUser = {
    authLogin(req, res, next){
        const token = req.cookies.accessToken
        if(!token){
            return res.sendStatus(401)
        } else {
            try {
                const verified = jwt.verify(token, 'secret')
                req.user = verified
                return next()
            } catch (error) {
                return res.sendStatus(401)
            }
        }
    }
}

export { authUser }