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
  body('id').
  trim().
  isNumeric().
  custom(id => {
    if(id.length >= 7)
      return false;
    return true;
  }).withMessage('El parametro id es erroneo'),

  body('nombre').
  trim().
  isAlpha().
  custom(nombre => {
    if(nombre.length >= 14)
      return false;
    return true;
  }).withMessage('El parametro del nombre es erroneo'),

  body('apellidoPaterno').
  trim().
  isAlpha().
  custom(apellidoPaterno => {
    if(apellidoPaterno.length >= 14)
      return false;
    return true;
  }).withMessage('El parametro del apellido paterno es erroneo'),

  body('apellidoMaterno').
  trim().
  isAlpha().
  custom(apellidoMaterno => {
    if(apellidoMaterno.length >= 14)
      return false;
    return true;
  }).withMessage('El parametro del apellido materno es erroneo'),

  body('fechaNacimiento').
  isDate().
  withMessage('El parametro de fecha de nacimiento paterno es erroneo')
];

const soloNumeros = [
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
    soloNumeros
}