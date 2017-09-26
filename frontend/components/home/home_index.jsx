
import React from 'react';
// import Cloudinary from './cloudinary';
import PixContainer from '../pix/pix_container';
import { Link } from 'react-router-dom';
import PixUtil from  '../../util/pix_util';

class HomeIndex extends React.Component {
  constructor(props) {
    super(props);
    const discoverPath = /discover/.exec(this.props.match.path);

    this.state = { view: discoverPath ? "grid" : "individual" };
  }
  componentDidMount() {
    this.props.getPix(this.props.currentUserId).then(undefined, () => this.props.history.push("/"));
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

  renderGrid() {
    return (
      <div className="grid">
        {this.renderPix()}
      </div>
    );
  }

  renderIndividual() {
    return (
      <div className="individual">
        {this.renderPix()}
      </div>
    );
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
            {this.renderGrid()}
          </div>
        </div>
      </div>
    );
  }
}

export default HomeIndex;
