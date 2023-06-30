import { Router } from "express";
import { userController } from "../controller/user-controller";
import { validationRule } from "../middleware/rule/validation-rule";

const userRoute = Router();

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

userRoute.post(
    '/validar-ejercicio-1',
    userController.validarEjercicio_1
)

userRoute.post(
    '/validar-ejercicio-2',
    userController.validarEjercicio_2
)

export default userRoute;