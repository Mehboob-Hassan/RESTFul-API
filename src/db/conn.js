const mongoose = require("mongoose")
mongoose.connect('mongodb://localhost:27017/Student-regist',)
.then(()=>console.log("Database Connected Successfully"))
.catch((err)=>{
    console.log("Not Connected")
})