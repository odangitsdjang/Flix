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
    this.props.getPic(this.props.match.params.picId);
    // check path and use modal or not use modal depending on link
    this.openModal();

  }

  renderPicture() {

        return <img src={PixUtil.getPotentiallySmallerPicFromUrl(
            this.props.pix.img_url, 1900, 1080)}/>;
  }

  closeModal() {
    this.setState({modalIsOpen: false});
    // when closing modal, go back to the previous link (user page)

    this.props.clearPix();
    this.props.history.goBack();
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
            <div className="userPictureModal">
              {this.renderPicture()}

            </div>
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
