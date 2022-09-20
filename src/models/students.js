const mongoose = require("mongoose")

const studentSchema = new mongoose.Schema({
    name : String,
    cast : String,
    age : Number,
    subject : String
})


// Now its time to make a new collection(table) using model:
const Student = new mongoose.model('Student', studentSchema);

// const mudasir = new Student({
//     name : "Mudasir Ahmed",
//     cast : "Gajoo Rana",
//     age : 22,
//     subject : "Science"
// })
// mudasir.save().then(()=>{
//     console.log("Hello Mudasir Subtmitted successfully")
// }).catch((err)=>{
//     console.log(err)
// })


module.exports = Student;