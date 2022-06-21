const jwt= require("jsonwebtoken")
module.exports=(req, res, next)=>
{
    const token = req.headers["x-access-token"] || req.body.token || req.query.token

    if(!token){
        res.json({
            status: false,
            message:"no token provided"
        })
    }else {
        jwt.verify(token, req.app.get('api_secret_key'), (err,decoded)=>{
            if (err){
                res.json({
                    status: false,
                    message: "Failed to authenticate token"
                })
            }else {
                req.decode= decoded
                next()
            }
        })
    }
}