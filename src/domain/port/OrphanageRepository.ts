import Orphanage from "../model/Ophanage";

export default interface OrphanageRepository {
  save(orphanage: Orphanage): Promise<Orphanage>;
  list(): Promise<Orphanage[]>;
  get(id: number): Promise<Orphanage>;
  delete(id: number): Promise<void>;
}