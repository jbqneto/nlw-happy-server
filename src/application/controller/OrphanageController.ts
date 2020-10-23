import {Request, Response} from 'express';
import Orphanage from '../../domain/model/Ophanage';
import OrphanageService from '../../domain/service/OrphanageService';
import OrphanageRepositoryImpl from '../infraestructure/repository/OrphanageRepositoryImpl';

class OrphanageController {

  private service: OrphanageService;

  constructor() {
    this.service = new OrphanageService(new OrphanageRepositoryImpl());
  }

  delete(req: Request, res: Response) {

    try {
      this.service.delete(req.params.id);
  
      return res.status(204).json();
      
    } catch (error) {
      return res.status(500).json({message: `Erro ao deletar ${req.params.id}`, error});
    }
    
  }

  async list(req: Request, res: Response) {
    const orphanages = await this.service.list();

    return res.status(200).json(orphanages);
  }

  async get(req: Request, res: Response) {
    try {
      const orphanage = await this.service.get(req.params.id);

      if (orphanage !== null) {
        return res.status(200).json(orphanage);
      } else {
        return res.status(404).json();
      }      
    } catch (error) {
      console.log(error);
      return res.status(404).json(error);
    }

  }

  async create(req: Request, res: Response) {
    
    const { 
      name, 
      latitude, 
      longitude, 
      about, 
      instructions, 
      opening_hours, 
      open_on_weekends
    } = req.body;

    try { 

      const reqImages = req.files as Express.Multer.File[];
      const images = reqImages.map(image => {
        return {path: image.filename}
      });

      const orphanage = await this.service.save({name, latitude, longitude, about, instructions, opening_hours, open_on_weekends, images})

      return res.status(201).json(orphanage);      
    } catch (error) {
      console.log(error);
      return res.status(500).json({message: 'Erro ao salvar orfanato', error});
    }

  }

}

export default OrphanageController;