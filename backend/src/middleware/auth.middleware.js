import jwt from 'jsonwebtoken';
import  User  from '../models/User.js';


export const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt; //the token is in the cookie after login/signup

        if(!token){
            return res.status(401).json({message: 'Unauthorized - No token Provided'});
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY); //verifies the token and returns the payload (userId)

        if(!decoded){
            return res.status(401).json({message: 'Unauthorized - Invalid token'});
        }

        const user = await User.findById(decoded.userId).select('-password');//exclude password field from the user object
        if(!user){
            return res.status(401).json({message: 'Unauthorized - User not found'})
        }

        req.user = user;
        next();
    } catch (error) {
        console.log("Error in auth middleware", error);
        res.status(500).json({message: 'Internal Server Error'});
    }
}