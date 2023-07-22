import mongoose from "mongoose";

type userSchema = {
    firstName:string,
    lastName:string,
    userName:string,
    email:string,
    password:string,
    role:{
        type:string,
        default:"user"
    }
    gender: string,
    createdAt:Date,
    profilePic:string
}
const userSchema = new mongoose.Schema<userSchema>({
    firstName:String,
    lastName:String,
    userName:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        required:true,
        type:String,
        unique:true
    },
    role:String,
    gender:{
        type: String,
        enum: ["male", "female"]
    },
    password:String,
    profilePic:String
},{timestamps: true})

const userModel = mongoose.model('userAuth',userSchema);
export default userModel