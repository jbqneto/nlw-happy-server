import { notNullableArray } from "../../common/util/ObjectUtil";
import Orphanage from "../../domain/model/Ophanage";
import ImageMapper from "./ImageMapper";

export default {

  toRepresentation(orphanage: Orphanage) {
    return {
      id: orphanage. id,
      name: orphanage.name,
      geolocation: {latitude: orphanage.latitude, longitude: orphanage.longitude},
      instructions: orphanage.instructions,
      opening_hours: orphanage.opening_hours,
      open_on_weekends: orphanage.open_on_weekends,
      images: ImageMapper.toRepresentationMany(notNullableArray(orphanage.images))
    }
  },

  toRepresentationMany(orphanages: Orphanage[]) {
    return orphanages.map(orphanage => this.toRepresentation(orphanage));
  }

}