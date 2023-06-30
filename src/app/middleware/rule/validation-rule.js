import { query , body , header } from "express-validator";

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

export const validationRule = {
    noQuery
}