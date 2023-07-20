import jwt from "jsonwebtoken";

const secret = 'secret';
const generateToken = (user:any)=>{
    const userObject = user.toObject();
    const token = jwt.sign(userObject,secret,{expiresIn:'18000s'})
    console.log(token);
    
    return token
}
export default generateToken