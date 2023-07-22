import Jwt from "jsonwebtoken";

const verifyToken = (token:any)=>{
    Jwt.verify(token,process.env.SECRET,(err:string,decoded:string)=>{
        if(err){
            return "verify your token please"
        }
        return decoded
    })
}
export default verifyToken