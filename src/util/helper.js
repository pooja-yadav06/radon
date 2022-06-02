const log = function(){
    let currentDate=new Date()
    console.log(currentDate)
}
   const log1= function(){
       let currentdate=new Date()
       let currentMonth=currentdate.getMonth() + 1//since month start from 0 index hence added 1
        console.log("The current month is" + currentMonth)
    }
       const log2=function getBatchInfo(){
            console.log("radon" ,"","W3D1" ,"","the topic for today is Nodejs module system" )
        }
    

module.exports.abc=log
module.exports.xyz=log1
module.exports.ijk=log2