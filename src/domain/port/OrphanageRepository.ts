import Orphanage from "../model/Ophanage";

export default interface OrphanageRepository {
  save(orphanage: Orphanage): Promise<Orphanage>;
}