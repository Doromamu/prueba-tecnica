import { Router } from "express";
import { userController } from "../controller/user-controller";
import { validationRule } from "../middleware/rule/validation-rule";

const userRoute = Router();

userRoute.get(
    '/home',
    validationRule.noQuery,
    userController.getHomeUI
)

userRoute.get(
    'ejercicio-1',
    validationRule.noQuery,
    userController.getEjercicio1UI
)

export default userRoute;