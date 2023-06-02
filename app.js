require('dotenv').config() // nos permite configurar variaveis em um arquivo diferente
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const userRouter = require('./routes/userRouter')
const adminRouter = require('./routes/adminRouter')
// ------------------------------------------------------------------
mongoose.set('strictQuery', true);

mongoose.connect(process.env.MONGO_CONNECTION_URL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, (error) =>{
        if(error){
            console.log(error)} 
        else{
        console.log('Mongo connected')}
    })

app.use('/user',express.json(), userRouter) // todas as rotas com /user, usaram as rotas em routes!

app.use('/admin', express.json(), adminRouter)

app.listen(process.env.PORT, () => {console.log(`server running on port ${process.env.PORT}`)})



