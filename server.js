const express = require("express")
const app = express()
const PORT = process.env || 3000
app.listen(PORT,()=>{
    console.log(`server running on ${PORT}`)
})
app.get('/',(req,res)=>{
    res.json({
        msg: "hello node"
    })
})