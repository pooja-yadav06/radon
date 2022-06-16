const jwt = require("jsonwebtoken");






const mid=async function(req,res,next){
let token =await req.headers["x-Auth-token"];
if (!token) token = req.headers["x-auth-token"];

if (!token) return res.send({ status: false, msg: "token must be present" });
let decodedToken = jwt.verify(token, "functionup-radon");
  if (!decodedToken)
    return res.send({ status: false, msg: "token is invalid" });
    next()
}

const authorisation=async function(req,res,next){
    let token =await req.headers["x-Auth-token"];
if (!token) token = req.headers["x-auth-token"];

if (!token) return res.send({ status: false, msg: "token must be present" });
let decodedToken = jwt.verify(token, "functionup-radon");
  if (!decodedToken)
    return res.send({ status: false, msg: "token is invalid" });
    
    let userToBeModified=await req.params.userId 
    let userLoggedIn=decodedToken.userId 
    if(userToBeModified!=userLoggedIn) return res.send({status:false,msg:"User logged is not allowed to modify the request"});
    next()
};





module.exports.mid=mid;
module.exports.authorisation=authorisation