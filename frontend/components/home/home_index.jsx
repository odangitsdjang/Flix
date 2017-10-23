
import React from 'react';
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
  //
  gridHelper() {
    if (this.props.pix) {
      return this.props.pix.map(pic=>{
        // scale down pictures when fetching from cloudinary url using regex
        const scaledDownUrl = PixUtil.getPotentiallySmallerPicFromUrl(pic.img_url);
        return (
        <div>
          <PixContainer scaledDownUrl={scaledDownUrl} pic={pic} path={this.props.match.path}/>
        </div>
        );
      });
    }
  }

  indidualHelper() {
    console.log(this.props.pix)
    if (this.props.pix) {
      return this.props.pix.map(pic=> {
        const scaledDownPicUrl = PixUtil.getPotentiallySmallerPicFromUrl(pic.img_url);
        const scaledDownProfilePicUrl = PixUtil.getPotentiallySmallerPicFromUrl(pic.author.img_url, 150, 150);
        return (
          <div className="individual">
            <div>
              <img className="profile-pic" id="circle" src={scaledDownProfilePicUrl}/>
              <Link to={`/users/${pic.author.username}`}><h2>{pic.author.username}</h2></Link>
            </div>
            <img className="homefeed-pic" src={scaledDownPicUrl}/>
            <div className="under-the-pic">
              <Link to={`/users/${pic.author.username}`}><h4>{pic.author.username}</h4></Link>
              <h5>{pic.caption}</h5>
            </div>
          </div>);
      }

      );
    }
  }

  renderGrid() {
    return (
      <div className="grid">
        {this.gridHelper()}
      </div>
    );
  }

  renderIndividual() {
    return (
      <div>
        {this.indidualHelper()}
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
            { this.props.match.path === "/" ? this.renderIndividual() : this.renderGrid() }
          </div>
        </div>
      </div>
    );
  }
}

export default HomeIndex;
