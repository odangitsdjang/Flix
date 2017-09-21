import React from 'react';
import Cloudinary from './cloudinary';
import ModalDemo from './uploadModal';
class UserProfile extends React.Component {
  componentDidMount() {
    this.props.getUserInfo(this.props.match.params.userId);
  }

  renderUserInfo(user) {
    if (user) {
      return (
        <ul>

          <li>How you're feelin: {user.followers.status} </li>
          <li>HOWMANY?? TODO posts </li>
          <li>{user.followers.length} followers </li>
          <li>{user.following.length} following</li>
        </ul>
      );
    }
  }

  renderUserProfilePic(user) {
    if (user)
     return <img src={user.img_url}/>;
  }

  render() {
    const {user} = this.props;
    return (
      <div className="userProfile">
        <div className="userBody">
          <div className="userInfo">
            <div>
              {this.renderUserProfilePic(user)}
            </div>
            <div className="textInfo">
              {this.renderUserInfo(user)}
            </div>
          </div>
          <div className="userPix">
            <div><Cloudinary/></div>
            <h1>all the pics</h1>
            <ul>  <li><ModalDemo/> </li> </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default UserProfile;
