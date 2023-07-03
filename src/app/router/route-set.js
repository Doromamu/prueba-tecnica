import userRoute from "./user-route";
import errRoute from "./err-route";

const BASE_PATH = '/api/prueba-tecnica';

export function setRouteApp(app) {
  app.use(BASE_PATH,userRoute);
  app.use('',errRoute);
}