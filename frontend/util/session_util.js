export default class SessionUtil {
  static fetchUsers() {
    return $.ajax({
      url: "api/users"
    });
  }

  static createUser(user) {
    return $.ajax({
      method: "POST",
      url: "api/users",
      data: { user }
    });
  }

  static logIn(user) {
    return $.ajax({
      method: "POST",
      url: "api/session",
      data: { user }
    });
  }

  static logOut() {
    return $.ajax({
      method: "DELETE",
      url: "api/session",
    });
  }

  static followUser(currentUserId, userToFollowId) {
    return $.ajax({
      method: "POST",
      url: "api/following",
      data: {following: {follower_id: currentUserId, following_id: userToFollowId}}
    });
  }

  static unfollowUser(currentUserId, userToFollowId) {
    return $.ajax({
      method: "DELETE",
      url: "api/following",
      data: {following: {follower_id: currentUserId, following_id: userToFollowId}}
    });
  }

}
