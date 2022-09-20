const express = require("express")
const app =  express()
const path = require("path")
require("./db/conn")
const Student = require("./models/students");
const port = process.env.PORT || 8000

// Require Router
// const router = new express.Router();
// router.get('/router', (req, res)=>{
//     res.send("hello this is router for you")
// })

// app.use(router)

// Give a path of views to express
const staticPath = path.join(__dirname, '/views')

app.use(express.static(staticPath))
app.use(express.json())

// app.get("/", (req, res)=>{
//     res.send("Hello this is home Page")
// })


// Add documents in collection Students
// app.get("/students", async(req, res)=>{
//     const mudasir = await new Student({
//         name : "Hania Aamir2",
//         cast : "Aamir2",
//         age : 22,
//         subject : "Showbiz"
//     })
//     const createUser = await mudasir.save();
//     res.status(201).send()
// })

// Show the collections
// app.get("/students", async(req, res)=>{
//     try{
//         const studentData = await Student.find();
//         res.send(studentData)
//         console.log(studentData)

//     }catch(e){
//         res.send(e)
//     }
// })



// Show one value from the the collections
// app.get("/students", async(req, res)=>{
//     try{
//         const studentData = await Student.findById("63175e13162b94ba8b76c62b");
//         res.send(studentData)
//         console.log(studentData)

//     }catch(e){
//         res.send(e)
//     }
// })


// Delete the document from the the collections using ID
// app.get("/students", async(req, res)=>{
//     try{
//         const studentData = await Student.findByIdAndDelete("63175e13162b94ba8b76c62b");
//         res.send(studentData)
//         console.log(studentData)

//     }catch(e){
//         res.send(e)
//     }
// })


// Update the document from the the collections using ID
// app.get("/students", async(req, res)=>{
//     try{
//         const studentData = await Student.findByIdAndUpdate("63178076f430c8e90166aeb7", {"subject":"Tiktok"}, {new:true});
//         res.send(studentData)
//         console.log(studentData)

//     }catch(e){
//         res.send(e)
//     }
// })




app.listen(port, ()=>{
    console.log("connected successfully")
})