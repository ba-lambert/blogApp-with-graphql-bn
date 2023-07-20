import userModel from '../models/userModel'
import bcrypt from 'bcrypt'

const saltRounds = 8
type userArgs = {
    id:string,
    firstName:string,
    lastName:string,
    password:string,
    userName:string
}
const signUpUser = async(parent:string,args:userArgs) =>{
    const {userName,firstName,lastName,password} = args
    const hashedPassword =await bcrypt.hash(password,saltRounds)
    console.log(hashedPassword);
    const newUser = new userModel({userName,firstName,lastName,password:hashedPassword});
    await newUser.save()
    return newUser
}

const signInUser = async(parent:string,args:userArgs) =>{
    try{
        const {userName,password} = args
        const user = await userModel.findOne({userName})
        if(!user) {
            return 'User not found'
        }        
        const results =await bcrypt.compare(password,user.password);
        console.log(results);
        
        if(!results){
            return "invalid credentials"
        }
        return user
    }catch (e){
        console.log(e);
    }
}
export{
    signUpUser,
    signInUser
}