import { Router } from "express";
import { validationRule } from "../middleware/rule/validation-rule";
import { errController } from "../controller/err-controller";

const errRoute = Router();

//Se establece una ruta por defecto.
//En caso que el usuario ingrese una ruta mal
errRoute.use(
    '/',
    validationRule.noQuery,
    errController.error404
)

errRoute.get(
    '/error-400',
    validationRule.noQuery,
    errController.error400
)

export default errRoute;