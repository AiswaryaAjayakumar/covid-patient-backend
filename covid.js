const bodyParser = require('body-parser')
var express = require('express')
var mongoose= require('mongoose')
const { facultyModel } = require('./models/faculty')
const { patientModel } = require('./models/patientmodel')

var app = express()
app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.get('/',(req,res)=>{

    res.send("WELCOME")

})
app.post('/patient',(req,res)=>{

var patientObject= new patientModel(req.body)
res.json(patientObject)
    
})
app.post('/faculty',(req,res)=>{
var facultyObject= new facultyModel(req.body)
res.json(facultyObject)
})
app.listen(process.env.PORT||3001,()=>{

    console.log("Server started at http://localhost:3001/")
})


