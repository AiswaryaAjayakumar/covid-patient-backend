var mongoose=require('mongoose')

var facultySchema = new mongoose.Schema(
    {
name:{
    type:String,
    required:true
},
department:{
    type:String,
    required:true
}

    }
)

var facultyModel = mongoose.model('doctors',facultySchema)

module.exports={facultyModel}