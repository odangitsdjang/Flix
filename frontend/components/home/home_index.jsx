
import React from 'react';
// import Cloudinary from './cloudinary';
import PixContainer from '../pix/pix_container';
import { Link } from 'react-router-dom';
import PixUtil from  '../../util/pix_util';

class HomeIndex extends React.Component {
  componentDidMount() {
    const discoverPath = /discover/.exec(this.props.match.path);
    discoverPath ? this.props.getDiscoverPix().then(undefined, () => this.props.history.push("/"))
    : this.props.getHomePix(this.props.currentUserId).then(undefined, () => this.props.history.push("/"));
  }

  // <Link to={`/users/${this.props.user.id}/pix/${pic.id}`}><img src={scaledDownUrl}/></Link>
  renderPix() {
    if (this.props.pix) {
      return this.props.pix.map(pic=>{
        // scale down pictures when fetching from cloudinary url using regex
        const scaledDownUrl = PixUtil.getPotentiallySmallerPicFromUrl(pic.img_url);
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
          <div className="userPix">
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

export default HomeIndex;
