import { validationResult } from "express-validator"
import { accessData } from "../model/access-data/access-data";

function getHomeUI(req, res) {
    const errList = validationResult(req);
    if (errList.isEmpty()) {
        res.status(200).render('index', ({
            data: null,
            navBarDir: 'components/nav-bar/nav-bar',
            mainDir: 'components/main/home'
        }))
    } else {
        res.status(400).send(JSON.stringify("Porfavor no intentes mandar mas query :)"))
    }
}

function getEjercicio1UI(req, res) {
    const errList = validationResult(req);
    if (errList.isEmpty()) {
        res.status(200).render('index', ({
            data: null,
            navBarDir: 'components/nav-bar/nav-bar',
            mainDir: 'components/main/ejercicio-1'
        }))
    } else {
        res.status(400).send(JSON.stringify("Porfavor no intentes mandar mas query :)"))
    }
}

function getEjercicio2UI(req, res) {
    const errList = validationResult(req);
    if (errList.isEmpty()) {
        res.status(200).render('index', ({
            data: null,
            navBarDir: 'components/nav-bar/nav-bar',
            mainDir: 'components/main/ejercicio-2'
        }))
    } else {
        res.status(400).send(JSON.stringify("Porfavor no intentes mandar mas query :)"))
    }
}

function getCrudUI(req, res) {
    const errList = validationResult(req);
    if (errList.isEmpty()) {
        let datos = accessData.selectAll();
        res.status(200).render('index', ({
            data: datos,
            navBarDir: 'components/nav-bar/nav-bar',
            mainDir: 'components/main/crud'
        }))
    } else {
        res.status(400).send(JSON.stringify("Porfavor no intentes mandar mas query :)"))
    }
}

function getRegirstroUI(req, res) {
    const errList = validationResult(req);
    if (errList.isEmpty()) {
        res.status(200).render('index', ({
            data: null,
            navBarDir: 'components/nav-bar/nav-bar',
            mainDir: 'components/main/registro'
        }))
    } else {
        res.status(400).send(JSON.stringify("Porfavor no intentes mandar mas query :)"))
    }
}

function getPersonaPorId(req, res) {
    const errList = validationResult(req);
    if (errList.isEmpty()) {
        const id = req.body.entrada;
        const datos = accessData.selectById(id);
        res.status(200).render('index', ({
            data: datos,
            navBarDir: 'components/nav-bar/nav-bar',
            mainDir: 'components/main/crud'
        }));
    } else {
        res.status(400).send(JSON.stringify(errList));
    }
}

function registrarPersona(req, res) {
    const errList = validationResult(req);
    if (errList.isEmpty()) {
        const persona = req.body;
        const datos = accessData.insert(persona);
        res.status(200).redirect('/api/prueba-tecnica/crud');
    } else {
        res.status(400).send(JSON.stringify(errList));
    }
}

function ordenarXApellidoPaterno(req, res) {
    const errList = validationResult(req);
    if (errList.isEmpty()) {
        const listaDesordenada = accessData.selectAll();
        const datos = listaDesordenada.sort((a, b) => a.apellidoPaterno > b.apellidoPaterno ? 1 : -1)
        res.status(200).render('index', ({
            data: datos,
            navBarDir: 'components/nav-bar/nav-bar',
            mainDir: 'components/main/crud'
        }));
    } else {
        res.status(400).send(JSON.stringify(errList));
    }
}

function ordenarXApellidoMaterno(req, res) {
    const errList = validationResult(req);
    if (errList.isEmpty()) {
        const listaDesordenada = accessData.selectAll();
        const datos = listaDesordenada.sort((a, b) => a.apellidoMaterno > b.apellidoMaterno ? 1 : -1)
        res.status(200).render('index', ({
            data: datos,
            navBarDir: 'components/nav-bar/nav-bar',
            mainDir: 'components/main/crud'
        }));
    } else {
        res.status(400).send(JSON.stringify(errList));
    }
}

function ordenarXEdad(req, res) {
    const errList = validationResult(req);
    if (errList.isEmpty()) {
        const listaDesordenada = accessData.selectAll();
        const datos = listaDesordenada.sort((a, b) => 
            new Date(a.fechaDeNacimiento).getDate > new Date(b.fechaDeNacimiento) ? 1 : -1
        );
        res.status(200).render('index', ({
            data: datos,
            navBarDir: 'components/nav-bar/nav-bar',
            mainDir: 'components/main/crud'
        }));
    } else {
        res.status(400).send(JSON.stringify(errList));
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

    for (let index in cadena_entrada) {
        let caracter = cadena_entrada.charAt(index);

        if (!isNaN(caracter)) {
            array_numero.push(caracter);
            total++;
        }
    }

    let result = {
        entrada: cadena_entrada,
        numeros: array_numero,
        total: total
    }

    res.send(JSON.stringify(result));
}

export const userController = {
    getHomeUI,
    getEjercicio1UI,
    getEjercicio2UI,
    getCrudUI,
    getRegirstroUI,
    getPersonaPorId,
    validarEjercicio_1,
    validarEjercicio_2,
    registrarPersona,
    ordenarXApellidoPaterno,
    ordenarXApellidoMaterno,
    ordenarXEdad
}