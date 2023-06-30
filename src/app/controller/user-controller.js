import { validationResult } from "express-validator"

function getHomeUI(req,res){
    const errList = validationResult(req);
    if(errList.isEmpty()){
        res.render('index',({
            navBarDir : 'components/nav-bar/nav-bar',
            mainDir : 'components/main/home'
        }))
    }
}

function getEjercicio1UI(req,res){
    const errList = validationResult(req);
    if(errList.isEmpty()){
        res.render('index',({
            navBarDir : 'components/nav-bar/nav-bar',
            mainDir : 'components/main/home'
        }))
    }
}

export const userController = {
    getHomeUI,
    getEjercicio1UI
}