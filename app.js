const express = require("express");
const app = express ();

// app.listen(3001, () => console.log("Servidos escuchando al puerto 3001"))

app.set ('puerto',process.env.PORT || 3001);
app.listen(app.get('puerto'), ()=>console.log(`Servidor escuchando en puerto ${app.get('puerto')}`));


const path = require("path"); 

// Public como recurso de archivos estaticos
const publicPath =  path.resolve(__dirname, './public');
app.use(express.static(publicPath)); //midelware


app.get("/", function(req,res){
res.sendFile(path.join(__dirname,"./views/index.html")) 
})

app.get("/register", function(req,res){
     res.sendFile(path.join(__dirname,"./views/register.html")) 
     })

     app.get("/login", function(req,res){
          res.sendFile(path.join(__dirname,"./views/login.html")) 
          })

