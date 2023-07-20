import mongoose from "mongoose";

type userSchema = {
    firstName:string,
    lastName:string,
    userName:string,
    password:string,
    profilePic:string
}
const userSchema = new mongoose.Schema<userSchema>({
    firstName:String,
    lastName:String,
    userName:String,
    password:String,
    profilePic:String
})

const userModel = mongoose.model('userAuth',userSchema);
export default userModel