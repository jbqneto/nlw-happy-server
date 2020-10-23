import express, {Request, Response} from 'express';
import './infraestructure/database/connection';
import uploadCOnfig from '../common/config/upload';
import OrphanageController from './controller/OrphanageController';
import multer from 'multer';

const app = express();
app.use(express.json());

const upload = multer(uploadCOnfig);

const orphanage = new OrphanageController();

app.post('/orphanage', upload.array('images'), (req, res) => {
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