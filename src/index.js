const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const assignmentMW= function (req,res,next){
    var currentDate = new Date();
    var datetime = currentDate.getDate() + " "
                   + (currentDate.getMonth()+1) + " "
                   + currentDate.getFullYear() + " "
                   + currentDate.getHours() + ":"
                   + currentDate.getMinutes() + ":"
                   + currentDate.getSeconds();
    let ip= req.ip
    let url= req.originalUrl
    
    console.log(`${datetime} ${ip}  ${url}`)

    next()
}

app.use(assignmentMW)


mongoose.connect("mongodb+srv://pooja-yadav:poojamongodb@cluster0.xepnr.mongodb.net/test", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

// app.use (
//     function (req, res, next) {
//         console.log ("inside GLOBAL MW");
//         next();
//   }
//   );

// app.use('/', route);



app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
