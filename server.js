const express = require("express")
const app = express()
const PORT = process.env.PORT || 3000
const morgan = require('morgan')
const bodyParser = require('body-parser')
const contactRoute = require('./api/route/contactRoute')
const cors =  require('cors')
//middleware
app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use('/api/contacts', contactRoute)


app.listen(PORT,()=>{
    console.log(`server running on ${PORT}`)
})

app.get('/',(req,res)=>{
    res.json({
        msg: "hello node"
    })
})
