import React from 'react';
import Modal from 'react-modal';
import PixUtil from '../../util/pix_util';
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
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
    this.props.getPic(this.props.match.params.picId).then(
      ()=> this.openModal(), () => this.props.history.push("/"));
    // check path and use modal or not use modal depending on link

  }

  // tries to access a pix that does not exist or out of scope
  componentWillReceiveProps(nextProps) {
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
            this.props.pix.img_url, 1900, 1080)}/>
      </div>
      <div className="pix-info">
        <div>
          <img src={this.props.pix.author.img_url} id="circle"/>
          <ul>
            <li><h1>{this.props.pix.author.username}</h1></li>
            <li><h3>{this.props.pix.author.caption}</h3></li>
          </ul>
        </div>
        <div className="CAN ADD COMMENTS LIKES AND OTHER THINGS IN HERE">
          <h1>comments</h1>
          <h1>likes</h1>
        </div>
      </div>
    </div>
    );
  }

  closeModal() {
    // when closing modal, go back to the user link (tried with previous page
    // but going back to the previous page does not handle it well if refreshed
    // on the modal )
    this.props.clearPix();
    const url = this.props.match.url;
    const userLink = url.slice(0, /users\/\d+\//.exec(url)[0].length);
    this.props.history.push(userLink);
    this.setState({modalIsOpen: false});

  }

  render() {
    // if it matches the path from user show page, render modal
    // else render just the picture itself
    return (
      <div>
        { this.props.pix ?
          ( /users/.exec(this.props.match.path) ?
          <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            style={customStyles}
            contentLabel="pixModal"
            >
            {this.renderPicture()}
          </Modal>
              : this.renderPicture() ) : ""
        }

      </div>
    );
  }
}
// <img className="showPixSmall" src={this.props.scaledDownUrl} onClick={()=>this.openModal()}/>
export default UserPix;
// <img src={this.props.pic.img_url}/>
