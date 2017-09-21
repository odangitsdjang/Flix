export default class UserUtil {

  static getUserInfo(id) {
    return $.ajax({
      url: `api/users/${id}`
    });
  }
}
