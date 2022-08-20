const {schema, model, Schema} = require('mongoose');
const { JWT_SECRET,JWT_EXPIRE }= require('../config/index');
const jwt = require("jsonwebtoken");
const bcrypt = require('bcryptjs');


let AuthSchema = new Schema({
    username:{type:String,required:[true,"username is required"]},
    email:{type:String,
            match:[  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ ],
            required: [true,"email is required"],
            unique:true,
          },
    
    password:{type:String, 
                required: [true,"password is required"],
                minlength:[6,"password is minimum 6 characters "],
                select:false,//if we dont use it, it wont be used,
                
            }, 

    

                
    role:{type:String,
            enum:["user","publisher","admin"],
            default:"user"},


},{timestamps:true});

AuthSchema.pre('save', async function(){
    let salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);

})

// 19/08/2022
// json web token
// CREATE MONGOOSE CUSTOM METHOOD BEFORE SAVING:
//AuthSchma, use methods property and use any name = function (){//DO THIS} if valid token means send to 
// header. 
// jwt is having a method called sign method. (payload, jwt secret, {expiresIn} )
AuthSchema.methods.getTOKEN = function () {
    return jwt.sign({id: this._id }, JWT_SECRET, { expiresIn: JWT_EXPIRE }); 
} // now we should use this custom method in auth cintroller

module.exports = model('auth', AuthSchema);
