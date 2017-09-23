import React from 'react';
import Cloudinary from './cloudinary';

class UserProfile extends React.Component {
  componentDidMount() {
    console.log(this.props.loading);
    this.props.getUserInfo(this.props.match.params.userId).then(undefined, () => this.props.history.push("/"));
  }

  renderUserInfo(user, currentUserId) {
    if (user) {
      return (
        <ul className="userText">
          <li><h1>{user.username}</h1></li>
          <li><h5>{user.followers.status} </h5> </li>
          <li><h5> {user.pix.length} posts </h5> </li>
          <li><h5>{user.followers.length} followers </h5> </li>
          <li><h5>{user.following.length} following</h5> </li>
          { user ? (currentUserId === user.id ?
            <div className="changePP">
              <Cloudinary which={"changePP"}/></div>: "") : "" }

        </ul>
      );
    }
  }

  componentWillReceiveProps(nextProps) {
    // then handles when you try to access a user id that does not exist
    //  you will redirect to the home page
    if (nextProps.match.params.userId !== this.props.match.params.userId) {
      this.props.getUserInfo(nextProps.match.params.userId).then(undefined, () => this.props.history.push("/"));
    }
  }

  renderUserProfilePic(user) {
    if (user)
     return <img className="circle" src={user.img_url}/>;
  }

  //<PixContainer key= {pic.id} pic={pic}/>
  // scale down pictures when fetching from cloudinary url using regex


  renderPix() {
    if (this.props.user) {
      return this.props.user.pix.map(pic=>{
        let indx = /v\d/.exec(pic.img_url).index;
        let scaledDownUrl = pic.img_url.slice(0,indx).concat("w_1000,h_1000,c_limit/").concat(pic.img_url.slice(indx));

        return (
        <div>
          <img src={scaledDownUrl}/>
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
                {this.renderUserProfilePic(user)}
              </div>
            </div>
            <div className="textInfo">
              {this.renderUserInfo(user, currentUserId)}
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
