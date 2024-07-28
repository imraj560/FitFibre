const User = require('../models/userModel');
const jwt = require('jsonwebtoken')

const register = async(req, res)=>{

    const {name, email, password} = req.body;

    try{

        const user = await User.signup(name, email, password)
        const message = 'User successfully created'
        res.status(200).json({name, email, message})

    }catch(error){

        res.status(400).json({error: error.message})
    }

}

module.exports = {register}