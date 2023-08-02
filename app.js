// usar variables de entorno del .env
import { config } from 'dotenv';
config();
////////////////////////////

import app from './src/app.js';

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
