const jwt = require("jsonwebtoken");






const mid=async function(req,res,next){
    try{

let token =await req.headers["x-Auth-token"];
if (!token) token = req.headers["x-auth-token"];

if (!token) return res.status(401).send({ status: false, msg: "token must be present" });
let decodedToken = jwt.verify(token, "functionup-radon");
  if (!decodedToken)
    return res.status(400).send({ status: false, msg: "token is invalid" })
    }catch(err){
        res.status(500).send({error:err})
    };
    next()
}

const authorisation=async function(req,res,next){
    try{
    let token =await req.headers["x-Auth-token"];
if (!token) token = req.headers["x-auth-token"];

if (!token) return res.status(401).send({ status: false, msg: "token must be present" });
let decodedToken = jwt.verify(token, "functionup-radon");
  if (!decodedToken)
    return res.status(400).send({ status: false, msg: "token is invalid" });

    let userToBeModified=await req.params.userId 
    let userLoggedIn=decodedToken.userId 
    if(userToBeModified!=userLoggedIn) return res.status(403).send({status:false,msg:"User logged is not allowed to modify the request"})
    }catch(err){
        res.status(500).send({error:err})
    }
    next()
};





module.exports.mid=mid;
module.exports.authorisation=authorisation