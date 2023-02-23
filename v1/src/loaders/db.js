//! Burası mongoo db bağlantı alanı 

const mongoose=require("mongoose")

const db=mongoose.connection;


db.once("open",()=>{
    console.log("DB  Bağlantısı kuruldu")

})

mongoose.set('strictQuery', true);

const connectDB =async ()=>{
    await mongoose.connect(`mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/asana`,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

}

module.exports={
    connectDB
}