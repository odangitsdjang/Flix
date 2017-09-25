import React from 'react';
import Modal from 'react-modal';
import PixUtil from '../../util/pix_util';
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
    this.subtitle.style.color = '#050606';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  componentDidMount() {
    this.openModal();
  }

  createPix(e) {
    console.log(this.props.imgSrc);
    e.preventDefault();
    const newPic = { caption: this.state.caption, img_url: this.props.imgSrc,
      author_id: this.props.authorId };
    this.props.createPic(newPic).then(()=> {
      this.closeModal();
      this.props.getUserInfo(newPic.author_id);
      this.props.resetLink();
    });
  }

  updateInput(e) {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  }

  renderUploadPicture() {
    return (

    <form className="uploadPicForm" onSubmit={e=> this.createPix(e) }>
      <img src={PixUtil.getPotentiallySmallerPicFromUrl(this.props.imgSrc)}/>
      <br/>
      <input name="caption" value={this.state.caption} placeholder="~~Caption~~" onChange={this.updateInput}/>
      <input type="submit" value="upload!!"/>
    </form>
    );
  }

  renderChangeProfilePicture() {
    return (
      <div>

        <img src={PixUtil.getPotentiallySmallerPicFromUrl(this.props.imgSrc)}/>
        <br/>
        <input type="button" onClick={()=> this.updatePicture() }value="update"/>
        <input type="button" onClick={this.closeModal} value="cancel"/>
      </div>
    );
  }

  updatePicture() {
    const property = {img_url: this.props.imgSrc };

    this.props.updateProfile(this.props.authorId, property).
      then(()=> {
        this.closeModal();
        this.props.getUserInfo(this.props.authorId);
        this.props.resetLink();
    });
  }

  render() {
    const { which } = this.props;
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
        { which === "uploadPic" ? this.renderUploadPicture() : this.renderChangeProfilePicture() }
        </div>

        </Modal>
      </div>
    );
  }
}
// <button onClick={this.openModal}>Open Modal</button>
export default UserModal;
