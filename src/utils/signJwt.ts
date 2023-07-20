import jwt from 'jsonwebtoken'

const secret = 'secret';
const generateToken = (user:any)=>{
    const token = jwt.sign(user,secret)
    return token
}
export default generateToken