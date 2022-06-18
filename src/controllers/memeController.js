let axios = require("axios")

let createMeme= async function(req,res){
    try{
        let options= {
            method :"post",
            url :"https://api.imgflip.com/caption_image?template_id=87743020& text0=Bcom???&text1=functionUp??& username=chewie12345& password=meme@123"
        }
        let result = await axios(options)
        res.send({data:result.data})
    }
    catch(error){
        console.log(error)
        res.status(500).send({status:false,msg:"server error"})

    }
}

module.exports.createMeme=createMeme