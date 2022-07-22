
import multer from 'multer'
import path from 'path'
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import fs from 'fs' // Este es importante para guardar las imágenes en el servidor
import axios from 'axios';

let AI;

export function actualizarAI (){
    getAI().then(res => AI = res).then(res => console.log(AI))
}

export const getAI = async () => {
    const res = await axios.get('http://localhost:8000/images/AI')
    return res.data
}
// Esta función indica dónde almacenara las imágenes, en la carpeta /static/images
// Cambiará el nombre a "nombreporDefault-milisegundos.extensión" 
// Ej. Azalea-1231687412515.jpg
// Cambiar por id

actualizarAI()

export const diskStorage = multer.diskStorage({
    destination: path.join(__dirname, '../static/images'),
    filename: (req, file, cb) => { // cb es para callback
        cb(null, AI + '-' + file.originalname)
        actualizarAI()
    }
})

// Este middleware permitirá subir imágenes en la dirección declarada anteriormente
export const fileUpload = multer({
    storage: diskStorage
}).single('image')
