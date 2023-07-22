import {v2 as cloudinary} from 'cloudinary'
import {CloudinaryStorage} from 'multer-storage-cloudinary'

cloudinary.config({
    cloud_name:process.env.CLOUD_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret:process.env.CLOUDINARY_SECRET
})
const myParams = {
    folder:'WebApp',
    allowedFormats: ['jpeg', 'png', 'jpg'],
}
const storage = new CloudinaryStorage({
    cloudinary,
    params: myParams
})
export default storage