import express, {Request, Response} from 'express';
import './infraestructure/database/connection';
import OrphanageController from './controller/OrphanageController';

const app = express();
app.use(express.json());

const orphanage = new OrphanageController();

app.post('/orphanage', (req, res) => {
  return orphanage.create(req, res);
});

app.get('/orphanage', (req, res) => {
  return orphanage.list(req, res);
});

app.get('/orphanage/:id', (req, res) => {
  return orphanage.get(req, res);
});

app.delete('/orphanage/:id', (req, res) => {
  return orphanage.delete(req, res);
});

export default app;