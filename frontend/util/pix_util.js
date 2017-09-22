export default class PixUtil {

  static getPic(id) {
    return $.ajax({
      url: `api/pixes/${id}`
    });
  }

  static getPix(userId) {
    return $.ajax({
      url: `api/users/${userId}/pixes`
    });
  }

  static createPic(pic) {
    return $.ajax({
      method: "POST",
      url: `/api/users/${pic.authorId}/pixes`,
      data: { pix: pic }

    });
  }

  static deletePic(pixId) {
    return $.ajax({
      method: "DELETE",
      url: `api/pixes/${pixId}`
    });
  }
}
