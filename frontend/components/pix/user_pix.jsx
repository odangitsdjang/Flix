import React from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import PixUtil from '../../util/pix_util';
// This component can be accessed in  many different ways:
// 1. Clicking a picture from a user's page,
// 2. Accessing pix/1 in the url
// 3. Clicking a picture in discover feed
const customStyles = {
  overlay : {
    position        : 'fixed',
    top             : 0,
    left            : 0,
    right           : 0,
    bottom          : 0,
    backgroundColor : 'rgba(54,70,93,.95)',
    zIndex          : 10
  },
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    padding               : '0',
    border                : 'none'
  }
};

class UserPix extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false,
      caption: ""
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // this.subtitle.style.color = '#050606';
  }

  componentDidMount() {
    // if inside user show page then use and open modal
    // if check is for when it's clicked NOT from discover/home feed
    if (!this.props.pic) {
      this.props.getPic(this.props.match.params.picId).then(
        ()=> this.openModal(), () => this.props.history.push("/"));
    }
  }

  // tries to access a pix that does not exist or out of scope
  componentWillReceiveProps(nextProps) {
    if (nextProps.path !== "/discover")
      if (nextProps.match.params.picId !== this.props.match.params.picId) {
        this.props.getPic(nextProps.match.params.picId).then(
          undefined, () => this.props.history.push("/"));
      }
  }

  renderPicture() {
    return (

    <div className="user-pix">
      <div className="user-pix inner">
        <img src={PixUtil.getPotentiallySmallerPicFromUrl(
            this.props.pic.img_url, 1900, 1080)}/>
      </div>
      <div className="pix-info">
        <div>
          <img id="circle" src={PixUtil.getPotentiallySmallerPicFromUrl(this.props.pic.author.img_url)} id="circle"/>
          <ul>
            <li> <Link to={`/users/${this.props.pic.author.username}`}><h1>{this.props.pic.author.username}</h1> </Link> </li>
            <li><h3>{this.props.pic.caption}</h3></li>
          </ul>
        </div>
        <div className="CAN ADD COMMENTS LIKES AND OTHER THINGS IN HERE">

        </div>
      </div>
    </div>
    );
  }

  closeModal() {
    // when closing modal, go back to the user link (tried with previous page
    // but going back to the previous page does not handle it well if refreshed
    // on the modal )
    if (/users/.exec(this.props.path)) {
      this.props.clearPix();
      const url = this.props.match.url;
      // add logic for grid from the discover
      const userLink = url.slice(0, /users\/\w+\//.exec(url)[0].length);
      this.props.history.push(userLink);
    }
    this.setState({modalIsOpen: false});

  }
  routeProperly() {
    if (/users/.exec(this.props.path)) {
      return (<Modal
        isOpen={this.state.modalIsOpen}
        onAfterOpen={this.afterOpenModal}
        onRequestClose={this.closeModal}
        style={customStyles}
        contentLabel="pixModal"
        >
        {this.renderPicture()}
      </Modal>);
    } else if (this.props.path==="/discover") {
      return (
      <div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="pixModal"
          >
          {this.renderPicture()}
        </Modal>
        <img src={this.props.scaledDownUrl} onClick={this.openModal}/>
      </div>);
    } else
     this.renderPicture();
  }
  render() {
    // if it matches the path from user show page, render modal
    // else render just the picture itself
    return (
      <div>
        { this.props.pic ?
          this.routeProperly() : ""
        }

      </div>
    );
  }
}
export default UserPix;
