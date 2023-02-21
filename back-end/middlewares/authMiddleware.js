import {jwt} from "../lib/promisifyJWT.js";
import {SECRET_KEY} from "../constants/index.js";

export const authMiddleware = async (req, res, next) => {
    const token = req.cookie['token'];
    if (token) {

        try {
            const decodedToken = await jwt.verify(token, SECRET_KEY);
            req.isAuthenticated = true;
            req.user = decodedToken;
        } catch (err){
            res.clearCookie('token');
            return res.status(401).json({message: 'Invalid TOKEN!'});
        }

    }
    next();
}