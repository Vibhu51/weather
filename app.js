const path = require('path')
const express = require('express')
const getgeo = require("./geo")
const weather =require("./weather")
const hbs =require("hbs")
const app =express()

//Path setup

viewspath=path.join(__dirname, "./templates/views")

exactpath=path.join(__dirname, './templates')
hbspath=path.join(__dirname,'./templates/partials')

//hbs setup
app.set("view engine","hbs")
app.use(express.static(exactpath))
hbs.registerPartials(hbspath)
app.set("views",viewspath)

//Serving dynamic content


app.get("",(req,res)=>{
    res.render("index",{
        title:"weather-APP",
        work:"Forecasts data",
        name:"Vibhu Gautam"
    })
}) 

app.get("/weather",(req,res)=>{
    if(!req.query.address){
        return res.send({error:"You must enter the address to fetch weather data"})
    }
    console.log(req.query.address)
    getgeo(req.query.address, (error, data) => {
    if(error){
     return res.send({Error:error})   
    }
    console.log("data", data)
    weather(data.longitude, data.latitude, (err, dat)=>{
        if(err){
         return res.send({error:err})   
        }
        res.send({Location:data,
                  data:dat})
    })
})
})

app.get("/about",(req,res)=>{
    res.render("about",{
        title:"About",
        work:"This is being published by Vibhu Gautam",
        name:"Vibhu Gautam"
    })
})

app.get("/about/*",(req,res)=>{
    res.render("all",{
        title:"404 Article not found",
        name:"Vibhu Gautam"
    })
})

app.get("/*",(req,res)=>{
    res.render("all",{
        title:"404 Page not found",
        name:"Vibhu Gautam"
    })
})




app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})