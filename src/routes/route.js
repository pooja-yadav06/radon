const express = require('express');
const { route } = require('express/lib/application');
const res = require('express/lib/response');
const router = express.Router();

router.get('/students/:name', function(req, res) {
    let studentName = req.params.name
    console.log(studentName)
    res.send(studentName)
})






router.get('/movies', function(req, res) {
    let movieList=["Dangal","dhakad","sultan","mohabbatein"]
    res.send(movieList)
})


router.get('/movie/:index', function(req,res) {
    let movie=["mard","lawaris","sharabi","yarana"]
    if(req.params.index>3){
        res.send("use valid index")
        return;
} else{
    res.send(movie[req.params.index])}
    return;
})


router.get('/films', function(req,res){
    let film=[{
        "id":1,"name":"bahubali"},{
        "id":2,"name":"kgf"},{
        "id":3,"name":"bahubali 2"},{
         "id":4,"name":"kgf 2"},
        ]
        res.send({film})
})


router.get('/film/:Id',function(req,res){
    let filmId=[{
        "id":1,"name":"the lord of ring"},{
            "id":2,"name":"iron man"},{
                "id":3,"name":"wonder women"},{
                    "id":4,"name":"batman"}
]
if(req.params.Id<5){
res.send(filmId[req.params.Id-1].name)
return;
}
else{
res.send("id not exits")
return; 
}
})







router.get("/test-api" , function(req, res) {
    res.send("hi FunctionUp")
})


router.get("/test-api-2" , function(req, res) {
    res.send("hi FunctionUp. This is another cool API")
})


router.get("/test-api-3" , function(req, res) {
    res.send("hi FunctionUp. This is another cool API. And NOw i am bored of creating API's ")
})


router.get("/test-api-4" , function(req, res) {
    res.send("hi FunctionUp. This is another cool API. And NOw i am bored of creating API's. PLZ STOP CREATING MORE API;s ")
})



router.get("/test-api-5" , function(req, res) {
    res.send("hi FunctionUp5. This is another cool API. And NOw i am bored of creating API's. PLZ STOP CREATING MORE API;s ")
})

router.get("/test-api-6" , function(req, res) {
    res.send({a:56, b: 45})
})

router.post("/test-post", function(req, res) {
    res.send([ 23, 45 , 6])
})


router.post("/test-post-2", function(req, res) {
    res.send(  { msg: "hi" , status: true }  )
})

router.post("/test-post-3", function(req, res) {
    // let id = req.body.user
    // let pwd= req.body.password

    // console.log( id , pwd)

    console.log( req.body )

    res.send(  { msg: "hi" , status: true }  )
})



router.post("/test-post-4", function(req, res) {
    let arr= [ 12, "functionup"]
    let ele= req.body.element
    arr.push(ele)
    res.send(  { msg: arr , status: true }  )
})

module.exports = router;