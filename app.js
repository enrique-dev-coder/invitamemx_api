// usar variables de entorno del .env
import { config } from 'dotenv';
config();
////////////////////////////

import app from './src/app.js';

const PORT = process.env.PORT;

function startServer() {
  app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
  });
}

startServer();
