const express= require('express');
const app =express();
const bodyParser= require("body-parser");
const multer = require("multer");
const upload= multer(); 
const puerto =5057;
/** multer  para tipos de datos multipart/form-data get,post
 * subir archivos al servidor
 */
app.use(bodyParser.json());//para tipos json
app.use(bodyParser.urlencoded({extended:true}));
/** application/x-form ur-encode*/

app.post("/profile",upload.array(),function(req,res,next){
console.log(req.body);
res.json(req.body);
});



// req --> Request :petición
// res --> Response: Respuesta a una peticion
app.get('/',function(req,res){
res.send('<h1>Hola Mundo PCJIC 2020</h1');
});

app.get('/acerca',function(req,res){
    res.send('<h1>Acerca de mi proyecto</h1>');
    });

    app.get('/login',function(req,res){
        res.send('<input type="text" placeholder="Usuario">');
  });  

app.get('/json',function(req,res){
res.json({Hola:'Media técnica PCJIC',
          nombre:'Juan Pérez',
        colegio:'Gilberto Alzate Avendaño'});

});
// req.params.id
app.get("/user/:id",function(req,res){
res.send("<h2>Usuario: </h2> " +  req.params.id);

});
app.get("/user2/:id",function(request,response){
  response.send("<h2>Usuario: </h2> " +  request.params.id);
    
    });
app.get('/api/usuario/:usuario',(req,res)=>{

const {usuario}=req.params;
res.status(200).send({usuario});
})

app.listen(puerto,function(){
console.log("El servidor se encuentra activo puerto "+puerto);
});


