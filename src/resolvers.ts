import { blogsModel } from "./models/blogsModel";
import { signUpUser,signInUser } from "./controllers/userAuth";
import multer from 'multer';
import storage from "./storage/storage";
import verifyToken from "./utils/verifyToken";
import {Request} from "express";

const upload = multer({storage})
type args = {
    name:string
}
type blogArgs = {
    id:string,
    header:string,
    author:string,
    body:string
}
type userArgs = {
    id:string,
    firstName:string,
    lastName:string,
    password:string,
    userName:string
}
const resolvers = {
    Query:{
        greetings: () =>"hello World",
        welcome:(parent:string,args:args)=>`Hello ${args.name}`,
        blogs:async() => await blogsModel.find({}),
        blog:async (parent:string,args:blogArgs,Request: { headers: { authorization: string; }; }) =>{
            const token=Request.headers.authorization
            // const user = verifyToken()
            console.log(token);
            
            const {id} = args
            const singleBlog = await blogsModel.findById(id);
            return singleBlog
        }
    },
    Mutation: {
        create:  async (parent:string,args:blogArgs) =>{
            const {header,author,body} = args;
            const newBlog = new blogsModel({
                header,
                author,
                body
            });
            await newBlog.save();
            return newBlog;
        },
        update: async (parent:string,args:blogArgs) =>{
            const {id} = args
            const updatedBlog = await blogsModel.findByIdAndUpdate(id,args)
            return updatedBlog
        },
        delete: async (parent:string,args:blogArgs) =>{
            const {id} = args
            const deleteBlog = await blogsModel.findByIdAndDelete(id)
            return deleteBlog
        },
        login: signInUser,
        signUp: signUpUser
    }
}
export {resolvers}