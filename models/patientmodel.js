var mongoose=require('mongoose')

var patientSchema= new mongoose.Schema({


    name:{
        type:String,
        required:true
    },
    mail:{
        type:String,
        lowercase:true,
        required:true

    },
    ph:{
        type:Number,
        required:true
    },
    dr:{
        type:String,
        required:true
    },
    symptoms:{
        type:String,
        required:true
    }
}

    
)

var patientModel= mongoose.model('patients',patientSchema)

module.exports={patientModel}