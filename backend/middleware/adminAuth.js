import jwt from 'jsonwebtoken'

const adminAuth = async (req,res,next) => {
    try {
        
        const { token } = req.headers
        if (!token) {
            return res.json({success:false, message: "Unauthorized Action"})
        }
        
        const token_decode = jwt.verify(token, process.env.JWT_SECRET_KEY)
        if (token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
            return res.json({success:false , message: "unauthorized action "})
        }
        next()

    } catch (error) {
        console.log(error)
        res.json({success:false, message: error.message})
    }
}

export default adminAuth 