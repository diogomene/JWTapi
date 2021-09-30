require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const temp = require('./groupSort')
const {PORT=3000}=process.env
require('./bdconnect')(mongoose);

app.use(express.json({limit:"1mb"}))
const authRouter = require('./routes/auth')
const cadRouter = require('./routes/cadastro')

app.use('/api/user', authRouter)
app.use('/cadastro', cadRouter)
app.get('/', async(req,res)=>{
    res.json(await temp("São José de Anchieta"))
})

app.listen(PORT, ()=>{
    console.log("Opa");
})