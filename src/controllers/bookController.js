// const authorModel = require("../models/authorModel")
const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel = require("../models/publisherModel")

const createBook= async function (req, res) {
    let book = req.body
    const{author_id,publisher}=book
    if(!author_id){
        return res.send("Author is required")
    }
    let authorid=await authorModel.findById(author_id)
    if(!authorid){
        return res.send("Author does not exists")
    }
    if(!publisher){
        return res.send("Publisher id required")
    }
    let publisherid=await publisherModel.findById(publisher)
    if (!publisherid){
        return res.send("publisher id does not exists")
    }
    let bookCreated = await bookModel.create(book)
    res.send({data: bookCreated})
}

    // const getBooksData= async function (req, res) {
//         let bookData= req.body
//     let books = await bookModel.find()
//      res.send({data: books})
// }

const getBooksWithAuthorDetails = async function (req, res) {
   let specificBook = await bookModel.find().populate(['author_id','publisher'])
 res.send({data: specificBook})
 }

module.exports.createBook= createBook
// module.exports.getBooksData= getBooksData
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
