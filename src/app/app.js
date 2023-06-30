import expressConfig from "./middleware/express-config";
import { setRouteApp } from "./router/route-set";

const app = expressConfig;

setRouteApp(app);

export default app;