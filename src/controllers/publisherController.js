const publisherModel= require("../models/publisherModel")





const createPublisher= async function (req, res) {
    let Publisher = req.body
    let publisherCreated = await publisherModel.create(Publisher)
    res.send({data: publisherCreated})
}



module.exports.createPublisher= createPublisher