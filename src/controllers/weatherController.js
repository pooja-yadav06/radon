let axios = require("axios")


let weatherTempreture= async function (req, res) {
    try {
        let options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=London&appid=da26ce1a07faefc8dd890b6a8c434494`
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data.main.temp
        res.status(200).send({temp: data})
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg:"error",error:err.message })
    }
}

let weatherTempretureBycities= async function(req,res){
    try{
        let cities = ["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        let cityObjArray = []

        for(let i=0;i<cities.length;i++) {
            let obj={city:cities[i]}
            let options = {
                method:'get',
                url:`http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=da26ce1a07faefc8dd890b6a8c434494`
            }
            let result = await axios(options)
            obj.temp = result.data.main.temp
            cityObjArray.push(obj)
    }
    let sorted = cityObjArray.sort(function (a,b){return a.temp - b.temp})
    res.status(200).send({data : sorted})
    }
        catch(err){
        console.log(err)
        res.status(500).send
    }
}

module.exports.weatherTempreture=weatherTempreture
module.exports.weatherTempretureBycities=weatherTempretureBycities