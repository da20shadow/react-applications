import {jwt} from "../lib/promisifyJWT.js";
import {ERRORS, SECRET_KEY} from "../constants/index.js";

export const authMiddleware = async (req, res, next) => {
    const token = req.cookies['token'];
    if (token) {
        try {
            const decodedToken = await jwt.verify(token, SECRET_KEY);
            req.isAuthenticated = true;
            req.user = {_id: decodedToken._id,name: decodedToken.name};
        } catch (err){
            res.clearCookie('token');
            return res.status(401).json({message: 'Invalid TOKEN!'});
        }

    }
    next();
}

export const isAuthenticated = (req, res, next) => {
    if (!req.isAuthenticated) {
        return res.status(401).json({message: ERRORS.UNAUTHORIZED});
    }
    next();
}