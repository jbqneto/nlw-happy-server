import Image from "../../domain/model/Image";

export default {
  toRepresentation(image: Image) {
    return {
      id: image.id,
      url: `http://localhost:3000/uploads/${image.path}`
    }
  },

  toRepresentationMany(images: Image[]) {
    return images.map(image => this.toRepresentation(image));
  }
}