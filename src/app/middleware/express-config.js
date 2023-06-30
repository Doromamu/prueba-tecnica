import express from 'express';
import morgan from 'morgan';
import path from 'node:path';

const expressConfig = express();
const PORT = 3000 || process.env.PORT;

//Configuracion de Express.
expressConfig.set('port', PORT);
expressConfig.set('view engine', 'ejs');
expressConfig.set('views', path.resolve('src/app/view'));
expressConfig.use(express.static(path.resolve('src/app/public')));
expressConfig.use(morgan('dev'));
expressConfig.use(express.json());
expressConfig.use(express.urlencoded({
  extended: true
}));

export default expressConfig;