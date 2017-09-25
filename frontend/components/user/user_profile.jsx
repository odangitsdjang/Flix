import React from 'react';
import Cloudinary from './cloudinary';
import PixContainer from '../pix/pix_container';
import { Link } from 'react-router-dom';
import PixUtil from  '../../util/pix_util';

class UserProfile extends React.Component {
  componentDidMount() {
    this.props.getUserInfo(this.props.match.params.userId).then(undefined, () => this.props.history.push("/"));
  }

  renderUserInfo() {
    const { user, currentUserId } = this.props;
    if (user) {
      return (
        <ul className="userText">
          <li><h1>{user.username}</h1></li>
          <li><h5>{user.followers.status} </h5> </li>
          <li><h5> {user.pix.length} posts </h5> </li>
          <li><h5>{user.followers.length} followers </h5> </li>
          <li><h5>{user.following.length} following</h5> </li>
          { user ? (currentUserId === user.id ?
            <div>
              <Cloudinary which={"changePP"}/>
            </div> :
            <div>{this.renderProperFollowButton()}</div>
          ) : "" }

        </ul>
      );
    }
  }

  renderProperFollowButton() {
    const { currentUser, user } = this.props;

    if (currentUser.following.includes(user.id)) {
      return <button onClick={e=> {e.preventDefault(); this.followingAction("unfollow");}} id="red">Unfollow</button>;
    } else {
      return <button onClick={e=> {e.preventDefault(); this.followingAction("follow");}} id="green">Follow</button>;
    }
  }

  followingAction(action) {
    action === "follow" ?
      this.props.followUser(this.props.currentUserId, this.props.user.id) :
      this.props.unfollowUser(this.props.currentUserId, this.props.user.id);
  }

  componentWillReceiveProps(nextProps) {
    // then handles when you try to access a user id that does not exist
    //  you will redirect to the home page
    if (nextProps.match.params.userId !== this.props.match.params.userId) {
      this.props.getUserInfo(nextProps.match.params.userId).then(undefined, () => this.props.history.push("/"));
    }
  }

  renderUserProfilePic() {
    const { user } = this.props;
    if (user)
     return <img id="circle" src={PixUtil.getPotentiallySmallerPicFromUrl(user.img_url)}/>;
  }



  renderPix() {
    if (this.props.user) {
      return this.props.user.pix.map(pic=>{
        // scale down pictures when fetching from cloudinary url using regex
        const scaledDownUrl = PixUtil.getPotentiallySmallerPicFromUrl(pic.img_url);
        return (
        <div>
            <Link to={`/users/${this.props.user.id}/pix/${pic.id}`}><img src={scaledDownUrl}/></Link>
        </div>
        );
      });
    }
  }

  renderLoader() {
    return this.props.loading ?
     (<div className="lds-css ng-scope">
            <div className="lds-rolling">
              <div></div>
            </div>
          </div>)
    : "";
  }

  render() {

    const {user, currentUserId} = this.props;
    return (
      <div className="userProfile">
        <div className="userBody">
          <div className="userInfo">
            <div className="profilePic">
              <div>
                {this.renderUserProfilePic()}
              </div>
            </div>
            <div className="textInfo">
              {this.renderUserInfo()}
            </div>
          </div>
          <div className="userPix">
            { user ? (currentUserId === user.id ?
              <div className="uploadCloudinary">
                <Cloudinary which={"uploadPic"}/></div> : "") : "" }
            { this.renderLoader() }
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
