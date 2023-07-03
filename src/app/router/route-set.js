import userRoute from "./user-route";
import errRoute from "./err-route";

const BASE_PATH = '/api/prueba-tecnica';

//Se establecen las turas
export function setRouteApp(app) {
  app.use(BASE_PATH,userRoute);
  app.use('',errRoute);
}