import mongoose from "mongoose";

interface blogsModel {
    header:string,
    author:string,
    body:string,
}
const blogsSchema =new mongoose.Schema<blogsModel>({
    header:String,
    body:String,
    author:String
})
const blogsModel = mongoose.model("blogs1", blogsSchema);
export {blogsModel}