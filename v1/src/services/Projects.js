//! Servisin yapacağı işlem model üzerinden kayıt işlemini gerçekleştirmek
//!  hata ayıklamak
const Projects=require("../models/Projects")

const insert =(data)=>{
    console.log(data)
    const project=new Projects(data)
   return project.save();
    

}


const list= ()=>{
    return Projects.find()


}
module.exports={
    insert,list
}