export default class UserUtil {

  static getUserInfo(id) {
    return $.ajax({
      url: `api/users/${id}`
    });
  }
  static updateUser(id, property) {
    return $.ajax({
      method: "PATCH",
      url: `api/users/${id}`,
      data: { id, user: property }
    });
  }
}
