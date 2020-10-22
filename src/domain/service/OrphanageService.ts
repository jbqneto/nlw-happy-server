import Orphanage from "../model/Ophanage";
import OrphanageRepository from "../port/OrphanageRepository";

export default class OrphanageService {

  private repository: OrphanageRepository;

  constructor(orphanageRepo: OrphanageRepository) {
    this.repository = orphanageRepo;
  }

  public delete(id: string) {
    return this.repository.delete(Number.parseInt(id));
  }

  public list() {
    return this.repository.list();
  }

  public get(id: string) {

    if (id === undefined || id === null || id === '')
      throw new Error(`ID inválido!`);

    return this.repository.get(Number.parseInt(id));
  }

  public save(orphanage: Orphanage) {
    return this.repository.save(orphanage);
  }
}