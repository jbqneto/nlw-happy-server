import express, {Request, Response} from 'express';
import './infraestructure/database/connection';
import OrphanageController from './controller/OrphanageController';

const app = express();
app.use(express.json());

const orphanage = new OrphanageController();

app.post('/orphanage', (req, res) => {
  return orphanage.create(req, res);
});

export default app;