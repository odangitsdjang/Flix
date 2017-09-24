import React from 'react';
import Modal from 'react-modal';

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
    this.subtitle.style.color = '#050606';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {

    const {user, currentUserId} = this.props;
    return (
      <div>
        <img class="showPixSmall" src={this.props.scaledDownUrl} onClick={()=>this.openModal()}/>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="pixModal"
        >
      <div className="userPictureModal">
        <img src={this.props.pic.img_url}/>
      </div>

        </Modal>

      </div>
    );
  }
}

export default UserPix;
