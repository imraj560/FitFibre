const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');
const validator = require('validator');


const userSchema = new Schema({

    name:{

        type: String,
        required: true,
        min: [6, 'Too small'],
        max: 12
        
    },
    email:{

        type: String,
        required: true,
        unique:true
    },

    password:{

        type: String,
        required: true,
       
    }

   
})

userSchema.statics.signup = async function(name, email, password){

    if(!email || !password || !name){

        throw Error('All fields must be filled')
    }

    if(!validator.isEmail(email)){

        throw Errow('Email format is wrong')
    }

    if(!validator.isStrongPassword(password)){

        throw Error('Password, min 6 Char, upper, lower, symbols')
    }

    const exists = await this.findOne({email})

    if(exists){

        throw Error('This email is alreay taken')
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const user = await this.create({name, email, password:hash})

    return user;
}





module.exports = mongoose.model('users', userSchema);