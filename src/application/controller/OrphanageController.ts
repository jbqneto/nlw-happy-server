import {Request, Response} from 'express';
import Orphanage from '../../domain/model/Ophanage';
import OrphanageService from '../../domain/service/OrphanageService';
import OrphanageRepositoryImpl from '../infraestructure/repository/OrphanageRepositoryImpl';

class OrphanageController {

  private service: OrphanageService;

  constructor() {
    this.service = new OrphanageService(new OrphanageRepositoryImpl());
  }

  public async create(req: Request, res: Response) {
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

      const orphanage = await this.service.save({name, latitude, longitude, about, instructions, opening_hours, open_on_weekends})

      return res.status(201).json(orphanage);      
    } catch (error) {
      console.log(error);
      return res.status(500).json({message: 'Erro ao salvar orfanato', error});
    }

  }

}

export default OrphanageController;