const corsMiddleware = async (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000,http://192.168.0.102:3000');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS,GET,POST,PATCH,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', 'true'); // enable sending credentials
    next();
}

export default corsMiddleware;