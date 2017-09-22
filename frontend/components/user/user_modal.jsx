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

class UserModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false,
      caption: ""
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.updateInput = this.updateInput.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#050606';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  componentDidMount() {
    this.openModal();

  }

  createPix(e) {
    e.preventDefault();
    const newPic = { caption: this.state.caption, img_url: this.props.imgSrc,
      author_id: this.props.authorId };
    this.props.createPic(newPic).then(()=> {
      this.closeModal();
      this.props.getUserInfo(newPic.author_id);
    });
  }

  updateInput(e) {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  }

  renderUploadPicture() {
    return (

    <form className="uploadPicForm" onSubmit={e=> this.createPix(e) }>
      <img src={this.props.imgSrc}/>
      <br/>
      <input name="caption" value={this.state.caption} placeholder="~~Caption~~" onChange={this.updateInput}/>
      <input type="submit" value="upload!!"/>
    </form>
    );
  }

  renderChangeProfilePicture() {
    return (
      <div>
        <img src={this.props.imgSrc}/>
        <br/>
        <input type="button" onClick={()=> this.updatePicture() }value="yes"/>
        <input type="button" onClick={this.closeModal} value="no"/>
      </div>
    );
  }

  updatePicture() {
    const property = {img_url: this.props.imgSrc };

    this.props.updateProfile(this.props.authorId, property).
      then(()=> {
        this.closeModal();
        this.props.getUserInfo(this.props.authorId);
    });
  }

  render() {
    const { which } = this.props;
    debugger
    return (
      <div>

        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="uploadModal"
        >
      <div className="userPictureModal">
          <h2 ref={subtitle => {this.subtitle = subtitle;}}>{which === "uploadPic" ? "Upload" : "Are you sure you want to update your picture?" }</h2>
        { which === "uploadPic" ? this.renderUploadPicture() : this.renderChangeProfilePicture() }
      </div>

        </Modal>
      </div>
    );
  }
}
// <button onClick={this.openModal}>Open Modal</button>
export default UserModal;
