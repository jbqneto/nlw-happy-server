import { getRepository, Repository } from "typeorm";
import Orphanage from "../../../domain/model/Ophanage";
import Ophanage from "../../../domain/model/Ophanage";
import OrphanageRepository from "../../../domain/port/OrphanageRepository";

export default class OrphanageRepositoryImpl implements OrphanageRepository {

  async list(): Promise<Orphanage[]> {
    const repository = getRepository(Orphanage);

    return await repository.find();
  }
  
  async get(id: number): Promise<Orphanage> {
    const repository = getRepository(Orphanage);

    return await repository.findOneOrFail(id);
  }
  
  async delete(id: number): Promise<void> {
    const repository = getRepository(Orphanage);
    repository.delete(id);
  }
  
  async save(orphanage: Ophanage): Promise<Orphanage> {
    
    const repository = getRepository(Orphanage);
    const created = repository.create(orphanage);

    await repository.save(created);
  
    return created;
  }
  
}