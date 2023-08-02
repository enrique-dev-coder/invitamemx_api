// usar variables de entorno del .env
import { config } from 'dotenv';
config();
////////////////////////////
import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import adminRouter from './src/routes/admin.js';

const app = express();
const PORT = process.env.PORT ?? 3000;

// allow cors
app.use(cors());
// prase json incoming req
app.use(express.json());
// extra security
app.use(helmet());

//routes
app.use('/administration', adminRouter);

app.get('/', (req, res) => {
  res.json('hola desde el server');
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
