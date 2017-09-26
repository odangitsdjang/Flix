const CLOUDINARY_UPLOAD_PRESET = 'cginlt5t';
const CLOUDINARY_UPLOAD_URL = "https://api.cloudinary.com/v1_1/odangitsdjang/image/upload";

import React from 'react';
import Dropzone from 'react-dropzone';
import request from 'superagent';
import UserModalContainer from './user_modal_container';

// code from here credits to www.css-tricks.com/image-upload-manipulation-react
export default class Cloudinary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      uploadedFileCloudinaryUrl: "",
      dropzoneClass: "cloudinary"
    };
    let loaderClass="hidden";
    this.resetLink = this.resetLink.bind(this);
  }

  resetLink() {
    console.log("resetLink: ");
    this.setState({uploadedFileCloudinaryUrl: ""});
  }

  onImageDrop(files) {
    this.loaderClass="loader";
    this.setState({
      uploadedFile: files[0],
      dropzoneClass: "hiddendrop"
    });
    this.handleImageUpload(files[0]);
  }

  handleImageUpload(file) {
    let upload = request.post(CLOUDINARY_UPLOAD_URL)
                        .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                        .field('file', file);

    // handle more errors here
    upload.end((err, response) => {
      if (err) {
        console.error(err);
        return;
      }

      if (response.body.secure_url !== '') {
        let secureUrl = response.body.secure_url;
        this.setState({
          uploadedFileCloudinaryUrl: response.body.secure_url
        });
      }
    });
  }
  render() {
    const { which } = this.props;
    return (
      <div>
        <div className="uploadsection">
          <Dropzone className={this.state.dropzoneClass}
            multiple={false}
            accept="image/*"
            onDrop={this.onImageDrop.bind(this)}>
            <button id={which}>{which === "uploadPic" ? "Upload" : "Change Profile Pic"  }</button>
          </Dropzone>
          {this.state.uploadedFileCloudinaryUrl === '' ?
            <div>
              <div className={this.loaderClass}></div>
            </div> :
            <div>
              <UserModalContainer resetLink={this.resetLink} which={this.props.which} imgSrc={this.state.uploadedFileCloudinaryUrl}/>

            </div>}
        </div>
      </div>
    );
  }
}

// <img id="uploadImg" src={this.state.uploadedFileCloudinaryUrl} />
