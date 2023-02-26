//! helmet saldıralara  karşı yapılan konfigürasyon
//! http-status status kod belirliyor
//! services klasöründe databese bağlanma noktasında devreye girecek
const express=require("express");
const helmet =require("helmet")
const config=require("./config")
const loaders=require("./loaders")
config();
loaders();


const {ProjeRoute,UserRoute} =require("./routes")

const app=express();


app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(helmet());




app.listen(process.env.APP_PORT,process.env.DB_HOST,()=>{
    console.log(`Sunucu ayağa kalktı...  http://${process.env.DB_HOST}:${process.env.APP_PORT}`)
    app.use("/projects",ProjeRoute);
    app.use("/users",UserRoute);

})