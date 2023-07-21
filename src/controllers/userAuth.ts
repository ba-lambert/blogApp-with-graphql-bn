import userModel from '../models/userModel'
import bcrypt from 'bcrypt'
import generateToken from '../utils/signJwt'
import { ApolloError } from 'apollo-server-errors';

const saltRounds = 8
type userArgs = {
    id:string,
    firstName:string,
    lastName:string,
    password:string,
    userName:string
}
type userResponse = {
    user:userArgs,
    token:string
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
            throw new ApolloError('User not found', 'USER_NOT_FOUND');
        }        
        const results =await bcrypt.compare(password,user.password);        
        if(!results){
            throw new ApolloError('Invalid credentials', 'INVALID_CREDENTIALS');
        }
        const token = await generateToken(user);
        return {
            token:token,user:user}
    }catch (e){
        console.log(e);
    }
}
export{
    signUpUser,
    signInUser
}