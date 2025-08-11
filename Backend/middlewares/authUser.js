import jwt from 'jsonwebtoken'


// user authentication middleware
const authUser = async (req,res,next) => {
    try {

        const {token} = req.headers
        
        if(!token){
            return res.json({success:false,message:'Not Authorized Login Again'})
        }
        const token_decode = jwt.verify(token,process.env.JWT_SECRET)
        req.body.userId = token_decode.id
        next()

    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }
}

export const authenticateUser = (req, res, next) => {
    const token = req.header('Authorization')?.split(' ')[1]; // Extract token from Authorization header
  
    if (!token) {
      return res.status(401).json({ message: 'No token provided' });
    }
  
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded; // Add decoded user info to request
      next();
    } catch (err) {
      return res.status(401).json({ message: 'Invalid token' });
    }
  };

export default authUser






















