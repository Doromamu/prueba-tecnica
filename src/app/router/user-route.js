import { Router } from "express";
import { userController } from "../controller/user-controller";
import { validationRule } from "../middleware/rule/validation-rule";

const userRoute = Router();

// Metodos tipo get
userRoute.get(
    '/home',
    validationRule.noQuery,
    userController.getHomeUI
);

userRoute.get(
    '/ejercicio-1',
    validationRule.noQuery,
    userController.getEjercicio1UI
);

userRoute.get(
    '/ejercicio-2',
    validationRule.noQuery,
    userController.getEjercicio2UI
);

userRoute.get(
    '/crud',
    validationRule.noQuery,
    userController.getCrudUI
);

userRoute.get(
    '/registrar',
    validationRule.noQuery,
    userController.getRegirstroUI
)

userRoute.get(
    '/ordenar-apellido-paterno',
    validationRule.noQuery,
    userController.ordenarXApellidoPaterno
)

userRoute.get(
    '/ordenar-apellido-materno',
    validationRule.noQuery,
    userController.ordenarXApellidoMaterno
)

userRoute.get(
    '/ordenar-edad',
    validationRule.noQuery,
    userController.ordenarXEdad
)

userRoute.get(
    '/descargar-cv',
    validationRule.noQuery,
    userController.descargarCV
)

//Metodos tipo post

userRoute.post(
    '/validar-ejercicio-1',
    userController.validarEjercicio_1
)

userRoute.post(
    '/validar-ejercicio-2',
    userController.validarEjercicio_2
)

userRoute.post(
    '/buscar-por-id',
    validationRule.soloNumeros,
    userController.getPersonaPorId
)

userRoute.post(
    '/registrar-persona',
    validationRule.registroPersona,
    userController.registrarPersona
)


export default userRoute;