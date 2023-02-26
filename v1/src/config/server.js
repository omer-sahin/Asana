//! Dotenv bir konfigrasyon aracı olduğu için konfigrasyon klasöründe
//! export ederek çalıştırıyoruz
//! server js deski konfigrasyonu  index js gönderiyoruz

const dotenv=require("dotenv")


module.exports=()=>{
    dotenv.config();
    

}