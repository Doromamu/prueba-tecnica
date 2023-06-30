import { validationResult } from "express-validator"

function getHomeUI(req, res) {
    const errList = validationResult(req);
    if (errList.isEmpty()) {
        res.render('index', ({
            navBarDir: 'components/nav-bar/nav-bar',
            mainDir: 'components/main/home'
        }))
    }
}

function getEjercicio1UI(req, res) {
    const errList = validationResult(req);
    if (errList.isEmpty()) {
        res.render('index', ({
            navBarDir: 'components/nav-bar/nav-bar',
            mainDir: 'components/main/ejercicio-1'
        }))
    }
}

function getEjercicio2UI(req, res) {
    const errList = validationResult(req);
    if (errList.isEmpty()) {
        res.render('index', ({
            navBarDir: 'components/nav-bar/nav-bar',
            mainDir: 'components/main/ejercicio-2'
        }))
    }
}

function validarEjercicio_1(req, res) {
    const cadenaEntrada = req.body.entrada;
    const array = cadenaEntrada.split(',');
    const array_invalidos = new Array();
    const array_validos = new Array();

    console.log(`El arreglo es: ${array}`);
    array.forEach(element => {
        let fecha = element.trim();

        if (fecha.length == 10) {
            let array_fecha = fecha.split('/');
            if (array_fecha.length == 3) {
                let es_valido = parseInt(array_fecha[0]) <= 30 &&
                    array_fecha[1] <= 12 ? true : false;

                if (es_valido)
                    array_validos.push(fecha);
                else
                    array_invalidos.push(fecha);
            } else
                array_invalidos.push(fecha);
        } else
            array_invalidos.push(fecha);

    });
    const result = {
        entrda: array,
        valoresInvalidor: array_invalidos,
        valoresValidos: array_validos
    }
    res.send(JSON.stringify(result));
}

function validarEjercicio_2(req, res) {
    const cadena_entrada = req.body.entrada.trim();
    const array_numero = new Array();
    let total = 0;

    for(let index in cadena_entrada){
        let caracter = cadena_entrada.charAt(index);

        if(!isNaN(caracter)){
            array_numero.push(caracter);
            total ++;
        }
    }

    let result = {
        entrada : cadena_entrada,
        numeros : array_numero,
        total : total
    }

    res.send(JSON.stringify(result));
}

export const userController = {
    getHomeUI,
    getEjercicio1UI,
    getEjercicio2UI,
    validarEjercicio_1,
    validarEjercicio_2
}