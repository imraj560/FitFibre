require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const mealRouter = require('./routes/mealRouter')
const userRouter = require('./routes/userRouter')

const app = express();

app.use(express.json());

app.use((req, res, next)=>{

    console.log(req.path, req.method);
    next();
})

// app.get('/', (req, res)=>{

//     res.json({msg:'Good job on your app Raju'})
// })

app.use('/api/meal', mealRouter)
app.use('/api/user', userRouter)


mongoose.connect(process.env.MONGO_URI).then(()=>{

    app.listen(process.env.PORT, ()=>{

        console.log('Connected to to mongoose DB:', process.env.PORT)
    })


}).catch((error)=>{

    console.log(error);
})

