const express = require("express")
const app = express()
const PORT = process.env.PORT || 3000
const morgan = require('morgan')
const bodyParser = require('body-parser')
const contactRoute = require('./api/route/contactRoute')
const cors =  require('cors')
const mongoose = require('mongoose')

//db connection
mongoose.Promise = global.Promise
mongoose.connect('mongodb://menomanabdulla:noman123321BAPPY@ds121861.mlab.com:21861/rest-mvc')
.then(res => console.log(`DB Connected`))
.catch(err=>console.log(err))


//middleware
app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use('/api/contacts', contactRoute)

//error handaling
app.use((req,res,next)=>{
    const err = new Error('not Found')
    err.status = 404
    next(err)
})

app.use((error,req,res,next)=>{
    res.status(error.status || 500)
    res.json({
        error
    })
})


app.listen(PORT,()=>{
    console.log(`server running on ${PORT}`)
})

app.get('/',(req,res)=>{
    res.json({
        msg: "hello node"
    })
})
