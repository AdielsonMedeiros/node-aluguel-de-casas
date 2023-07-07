import multer from "multer";
import path from 'path';




export default {
    storage: multer.diskStorage({
        destination: path.resolve(__dirname, '..', '..', 'uploads' ),
        filmename: (req,file, cb)=>{
            const ext = path.extname(file.originalName);
            const name = path.basename(file.originalName, ext);

            cb(null, `${name}-${Date.now()}${ext}`)
        },
    })
}