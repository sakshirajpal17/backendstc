//task 1
const express = require('express')
const path = require('path')
const bodyparser =require('body-parser')
const app = express()
app.use(bodyparser())
//task4
app.get("/",(req,res)=>{
res.sendFile(path.join(__dirname,"index.html"))
})
//task3
app.post("/",(req,res)=>{
res.send("the average is :" + (parseInt(req.body.firstNumber) + parseInt(req.body.secondNumber)+ parseInt(req.body.thirdNumber))/3 )
 })
//task2
app.get("/:name",(req,res)=>{
    console.log(req.params.name) 
    res.send(req.params.name)  
})
app.listen(1707,()=>{
console.log("helloo world")
})
