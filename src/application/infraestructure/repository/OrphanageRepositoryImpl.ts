import { getRepository, Repository } from "typeorm";
import Orphanage from "../../../domain/model/Ophanage";
import Ophanage from "../../../domain/model/Ophanage";
import OrphanageRepository from "../../../domain/port/OrphanageRepository";

export default class OrphanageRepositoryImpl implements OrphanageRepository {
  
  async save(orphanage: Ophanage): Promise<Orphanage> {
    console.log(orphanage);
    delete orphanage.id;

    const repository = getRepository(Orphanage);
    const created = repository.create(orphanage);

    await repository.save(created);
  
    return created;
  }
  
}