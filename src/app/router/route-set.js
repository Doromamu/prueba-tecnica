import userRoute from "./user-route";

const BASE_PATH = '/api/prueba-tecnica';

export function setRouteApp(app) {
  app.use(BASE_PATH,userRoute);
}