import express from 'express';
import { routes } from './routes';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(1554, () => {
  console.log('HTTP SERVER RUNNING');
})