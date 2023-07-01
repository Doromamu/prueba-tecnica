import { query , body , header } from "express-validator";

//Reglas para validar tipo de datos antes de llegar
//A la capa de aplicacion :)

const noQuery = [
    query().
    custom(value => {
      const QUERY_IS_EMTY = 2;
      const queryValue = JSON.stringify(value);
      if(queryValue.length != QUERY_IS_EMTY)
        return false;
      return true;
    }).
    withMessage('You can not send value in the query in this route.')
  ];

const registroPersona = [

];

const busquedaPorId = [
  body('entrada').
  trim().
  isNumeric().
  custom(id => {
    if(id.length >= 6)
      return false;
    return true;
  }).withMessage('Este valor no es valido :(')
]

export const validationRule = {
    noQuery,
    registroPersona,
    busquedaPorId
}