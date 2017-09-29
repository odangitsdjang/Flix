import PixUtil from '../util/pix_util';

export const RECEIVE_PIC = "RECEIVE_PIC";
export const RECEIVE_PIX = "RECEIVE_PIX";
export const RECEIVE_PIX_ERRORS = "RECEIVE_PIX_ERRORS";

export const receivePic = (pic) => ({
  type: RECEIVE_PIC,
  pic
});

const receivePix = (pix) => ({
  type: RECEIVE_PIX,
  pix
});

const receivePixErrors = (errors) => ({
  type: RECEIVE_PIX_ERRORS,
  errors
});

export const getPic = (id) => dispatch => (
  PixUtil.getPic(id).then(
    successPic => dispatch(receivePic(successPic)),
    err => dispatch(receivePixErrors(err.responseJSON))
  )
);

export const getPix = (userId) => dispatch => (

  PixUtil.getPix(userId).then(
    successPix => dispatch(receivePix(successPix)),
    err => dispatch(receivePixErrors(err.responseJSON))
  )
);

export const createPic = (pic) => dispatch => (
  PixUtil.createPic(pic).then(
    successPic => dispatch(receivePic(successPic)),
    err => dispatch(receivePixErrors(err.responseJSON))
  )
);

export const deletePic = (pixId) => dispatch => (
  PixUtil.deletePic(pixId).then(
    successPic => dispatch(receivePic(successPic)),
    err => dispatch(receivePixErrors(err.responseJSON))
  )
);

export const getDiscoverPix = (id) => dispatch => (
  PixUtil.discoverPix(id).then(
    successPix => dispatch(receivePix(successPix)),
    err => dispatch(receivePixErrors(err.responseJSON))
  )
);

export const getHomePix = (id) => dispatch => (
  PixUtil.homePix(id).then(
    successPix => dispatch(receivePix(successPix)),
    err => dispatch(receivePixErrors(err.responseJSON))
  )
);
