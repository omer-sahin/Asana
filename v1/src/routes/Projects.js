//! validasyon tanımı 
//! validate midlevare


const express=require("express")
const {create,index}=require("../controller/Project")
const router=express.Router();

router.post("/",create)
router.get("/",index)
module.exports=router