import express from 'express';
import dotenv from 'dotenv';
import mustache from 'mustache-express';
import path from 'path';
import mainRoutes from './routes/index.js';
import { fileURLToPath } from 'url';

dotenv.config();

const server = express();

server.set('view engine', 'mustache');
server.engine('mustache', mustache());
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//Rotas

server.use(mainRoutes);

server.use((req,res) => {
  res.send('página não encontrada!');
});

server.listen(process.env.PORT);