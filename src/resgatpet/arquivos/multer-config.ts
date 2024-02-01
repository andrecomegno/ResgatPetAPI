import {diskStorage} from 'multer';
import * as path from "path";
import { v4 as uuidv4 } from 'uuid';

const multerConfig = {
    storage: diskStorage({
        destination: './upload/files',
        filename:(req, file, cb) => {
            const filename = path.parse(file.originalname).name.replace(/\s/g, '') + '-' + uuidv4();

            const extension = path.parse(file.originalname).ext;
            cb(null, `${filename}${extension}`)
        },
    }),
};

export default multerConfig;