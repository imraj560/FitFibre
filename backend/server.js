require('dotenv').config();
const express = require('express');
const placeRouter = require('./routes/placeRouter')

const app = express();

app.use(express.json());

app.use((req, res, next)=>{

    console.log(req.path, req.method);
    next();
})

// app.get('/', (req, res)=>{

//     res.json({msg:'Good job on your app Raju'})
// })

app.use('/api/place', placeRouter)



app.listen(process.env.PORT, ()=>{

    console.log('listening on port no:', process.env.PORT)
})