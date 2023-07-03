import { validationResult } from "express-validator";

/*En este control se puede manejar diferentes tipos 
de errores HTTP, en este caso solo agregaron dos
y de forma simple y sencilla pero se puede agregar
sierta logica la cual lleve un mejor manejo sobre esto*/

function error400(req, res) {
    const errList = validationResult(req);
    if (errList.isEmpty()) {
        res.status(400).render('index', ({
            data: null,
            navBarDir: 'components/nav-bar/nav-bar',
            listOptionDir: 'components/nav-bar/lista-opciones',
            mainDir: 'components/main/err-400',
            footerDir: 'components/footer/footer'
        }));
    }else{
        res.redirect('/error-400');
    }
}

function error404(req, res) {
    const errList = validationResult(req);
    if (errList.isEmpty()) {
        res.status(400).render('index', ({
            data: null,
            navBarDir: 'components/nav-bar/nav-bar',
            listOptionDir: 'components/nav-bar/lista-opciones',
            mainDir: 'components/main/err-404',
            footerDir: 'components/footer/footer'
        }));
    }else{
        res.redirect('/error-400');
    }
}

export const errController = {
    error400,
    error404
}