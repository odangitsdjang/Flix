import React from 'react';
import Cloudinary from './cloudinary';

class UserProfile extends React.Component {
  componentDidMount() {
    this.props.getUserInfo(this.props.match.params.userId).then(()=>"");
  }

  renderUserInfo(user, currentUserId) {
    if (user) {
      return (
        <ul>
          <li>Hello, {user.username}</li>
          <li>How you're feelin: {user.followers.status} </li>
          <li>HOWMANY?? TODO posts </li>
          <li>{user.followers.length} followers </li>
          <li>{user.following.length} following</li>
          { user ? (currentUserId === user.id ?
            <div className="changePP">
              <Cloudinary which={"changePP"}/></div>: "") : "" }

        </ul>
      );
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.userId !== this.props.match.params.userId) {
      this.props.getUserInfo(nextProps.match.params.userId);
    }
  }

  renderUserProfilePic(user) {
    if (user)
     return <img src={user.img_url}/>;
  }

  //<PixContainer key= {pic.id} pic={pic}/>
  renderPix() {
    if (this.props.user) {
      return this.props.user.pix.map(pic=>(
        <div><img src={pic.img_url}/> </div>
      ));
    }
  }

  render() {
    const {user, currentUserId} = this.props;
    return (
      <div className="userProfile">
        <div className="userBody">
          <div className="userInfo">
            <div>
              {this.renderUserProfilePic(user)}
            </div>
            <div className="textInfo">
              {this.renderUserInfo(user, currentUserId)}
            </div>
          </div>
          <div className="userPix">
            { user ? (currentUserId === user.id ?
              <div className="uploadCloudinary">
                <Cloudinary which={"uploadPic"}/></div> : "") : "" }
            <div className="grid">
              { this.renderPix() }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserProfile;
