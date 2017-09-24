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

  static getHomeFeed(userId) {
    return $.ajax({
      url: `api/pix/${userId}`
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
  // this is a helper method that uses regex to fetch a picture that is
  // potentially downsized to a maximum dimension of minWidth or minHeight
  static getPotentiallySmallerPicFromUrl(originalPicUrl, minWidth, minHeight) {
    let indx = /v\d/.exec(originalPicUrl).index;
    return originalPicUrl.slice(0,indx).concat(
      `w_${minWidth},h_${minHeight},c_limit/`).concat(
      originalPicUrl.slice(indx));
  }
}
