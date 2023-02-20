import express from "express";

const router = express.Router();

router.get('/login', (req,res) => {

    const {email, password} = req.body;
    try {
        console.log('email: ', email);
        return res.status(200)
            .json({message: 'Successfully Logged in!'})
    } catch (err){
        console.log(err.message)
        return res.status(400).json({message: err.message});
    }

})

export default router;