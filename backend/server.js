require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const mealRouter = require('./routes/mealRouter')
const userRouter = require('./routes/userRouter')
const cors = require('cors')

const app = express();


var corsOptions = {
    // origin: 'https://creative-bunny-7517e7.netlify.app',
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

app.use(express.json());



app.use((req, res, next)=>{

    console.log(req.path, req.method);
    next();
})

// app.get('/', (req, res)=>{

//     res.json({msg:'Good job on your app Raju'})
// })

app.use('/api/meal', cors(corsOptions), mealRouter)
app.use('/api/user', cors(corsOptions), userRouter)


mongoose.connect(process.env.MONGO_URI).then(()=>{

    app.listen(process.env.PORT, ()=>{

        console.log('Connected to to mongoose DB:', process.env.PORT)
    })


}).catch((error)=>{

    console.log(error);
})

