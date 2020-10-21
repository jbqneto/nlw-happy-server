import Orphanage from "../model/Ophanage";
import OrphanageRepository from "../port/OrphanageRepository";

export default class OrphanageService {

  private repository: OrphanageRepository;

  constructor(orphanageRepo: OrphanageRepository) {
    this.repository = orphanageRepo;
  }

  public save(orphanage: Orphanage) {
    return this.repository.save(orphanage);
  }
}