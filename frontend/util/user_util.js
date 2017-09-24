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

  static followUser(currentUserId, userToFollowId) {
    return $.ajax({
      method: "POST",
      url: "api/following",
      data: {following: {follower_id: currentUserId, following_id: userToFollowId}}
    });
  }
}
