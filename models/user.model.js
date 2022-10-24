import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
    },
    country:{
        type:String,
        required:true,
        default:"Sri Lanka"
    },
    city:{
        type:String,
        required:true
    },
    img:{
        type:String,
    },
    phone:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true
    },
    isAdmin:{
        type:Boolean,
        default:false
    }
})

const UserModel = mongoose.model("User",UserSchema)

export default UserModel;