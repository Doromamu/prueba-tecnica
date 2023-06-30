import app from "./app/app";

function serverUp (){
    app.listen(app.get('port'),(req,res)=>{
        console.log(`Este servidor esta escuchando en 
        el puerto ${app.get('port')}`)
    })
}

serverUp();