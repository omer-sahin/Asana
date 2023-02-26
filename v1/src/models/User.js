const  mongoose=require("mongoose")



const UsersSchema=new mongoose.Schema({
    full_name:String,
    email: String,
    password:String,
    profile_image:String

},{versionKey:false,timestamps:true});

module.exports=mongoose.model("user",UsersSchema)