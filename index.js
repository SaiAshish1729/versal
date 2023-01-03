const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())

app.get("/", (req,res)=>{
    res.send("<h3>Hello Ashish ...</h3>")
});


app.get("/users", (req,res)=>{
    res.status(200).json({
        users:[{
            name:"ashish",
            email:"test@gmail.com",
            state:"Kolkata"
        },
        {
            name:"ashish",
            email:"test@gmail.com",
            state:"Kolkata"
        },
        {
            name:"ashish",
            email:"test@gmail.com",
            state:"Kolkata"
        },
    ]
    })
})

app.listen(5000, ()=>{
    console.log("Listning at PORT 5000")
})