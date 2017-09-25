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

  static discoverPix() {
    return $.ajax({
      url: "api/pix"
    });
  }

  static homePix(id) {
    return $.ajax({
      url: `api/pix/${id}`
    });
  }

  static pixObjectOrderedByCreatedDate(pix){
    if (pix) {
      const array = Object.keys(pix).map((id)=> {
        return pix[id];
      });
      return array.sort((first,second) => {
        // compares string value of second and first and makes sure the
        // highest value (most recently created) is first
        return second.created_at.localeCompare(first.created_at);
      });
    }
  }

  // this is a helper method that uses regex to fetch a picture that is
  // potentially downsized to a maximum dimension of minWidth or minHeight
  static getPotentiallySmallerPicFromUrl(originalPicUrl, minWidth=1000, minHeight=1000) {
    let indx = /v\d/.exec(originalPicUrl).index;
    return originalPicUrl.slice(0,indx).concat(
      `w_${minWidth},h_${minHeight},c_limit/`).concat(
      originalPicUrl.slice(indx));
  }
}
