
const express =require('express');
const router = express.Router();
/*const multer = require('multer');
const storage = multer.diskStorage({destination: (req,file,cb)=>{

    cb(null,'./archivos')
},
filename:(req,file,cb) =>{
    cb(null,file.originalname)
}
})
const upload = multer({storage: storage});*/

router.get('/', (req, res) =>{
    res.render('index');
});

router.get('/about', (req,res) => {
 res.render('about');
 
});


/*router.post('/multiple',upload.array('archivos'),(req,res)=>{
    console.log(req.file)
    res.send('archivos se subieron correctamente')
})*/



module.exports = router;
