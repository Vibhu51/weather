const request = require('request')
const weather = (latitude, longitude, callback) => {
    const url = "https://api.darksky.net/forecast/2a3ae8d9a42b06b288c5bf1547d50f83/" + longitude +"," + latitude
    request({url: url, json :true},(err, response)=>{
     if(err){
         callback("Check your connection", undefined)
     }else if(response.body.error){
         console.log("CHeck your URL", undefined)
     }else{
      callback(undefined, response.body.daily.summary)   
     }
 })
}

module.exports = weather