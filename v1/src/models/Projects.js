const { object } = require("joi")
const mongoose=require("mongoose")
const logger=require("../scripts/logger/Project")

const ProjectSchema=new mongoose.Schema({
    name:String,
    // user_id:{
    //     type: mongoose.Types.ObjectId,
    //     ref:"user"
    // }
},{versionKey:false,timestamps:true})


// ProjectSchema.pre("save",(Object)=>{
//     console.log("öncesi",object )

// })


ProjectSchema.post("save",(doc)=>{
    console.log("Sonrası",object )
    logger.log({
        level:"info",
        message:doc
    })

})



module.exports=mongoose.model("project",ProjectSchema)