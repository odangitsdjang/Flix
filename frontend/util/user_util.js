export default class UserUtil {
  static getUserInfo(username) {
    return $.ajax({
      url: `api/users/${username}`
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
