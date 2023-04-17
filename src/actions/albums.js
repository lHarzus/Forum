import {
  GET_ALBUM,
  ALBUM_ERROR,
  GET_ALBUMS,
  ALBUMS_ERROR,
  GET_PHOTO,
  GET_PHOTOS,
  PHOTO_ERROR,
  PHOTOS_ERROR,
  ADD_PHOTO,
  ADD_ERROR,
  ADD_ALBUM,
} from "../actions/types";

//Get all Albums
export const getAlbums = () => async dispatch => {
  try {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/guide/albums`
    );

    dispatch({
      type: GET_ALBUMS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: ALBUMS_ERROR,
    });
  }
};

//Get Album by id
export const getAlbumById = id => async dispatch => {
  try {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/guide/albums/${id}`
    );

    dispatch({
      type: GET_ALBUM,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: ALBUM_ERROR,
    });
  }
};

//Get album by user id
export const getPostByUserId = userId => async dispatch => {
  try {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/guide/albums?userId=${userId}`
    );

    dispatch({
      type: GET_ALBUM,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: ALBUM_ERROR,
    });
  }
};

//Get photos
export const getPhotos = () => async dispatch => {
  try {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/photos`);

    dispatch({
      type: GET_PHOTOS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PHOTOS_ERROR,
    });
  }
};

//Get Photos by Album id
export const getPhotosByAlbumid = albumId => async dispatch => {
  try {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/albums?albumId=${albumId}`
    );

    dispatch({
      type: GET_PHOTO,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PHOTO_ERROR,
    });
  }
};

//Add Album
export const addAlbum = formData => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.post(
      `https://jsonplaceholder.typicode.com/albums`,
      formData,
      config
    );

    dispatch({
      type: ADD_ALBUM,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: ADD_ERROR,
    });
  }
};

//Add Photo
export const addPhoto = formData => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.post(
      `https://jsonplaceholder.typicode.com/photos`,
      formData,
      config
    );

    dispatch({
      type: ADD_PHOTO,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: ADD_ERROR,
    });
  }
};
