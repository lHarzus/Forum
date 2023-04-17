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

const initialState = {
  albums: [],
  album: [],
  photo: [],
  photos: [],
};

export default function Alert(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_ALBUMS:
      return {
        ...state,
        albums: payload,
      };
    case GET_ALBUM:
      return {
        ...state,
        album: payload,
      };
    case GET_PHOTOS:
      return {
        ...state,
        photos: payload,
      };
    case GET_PHOTO:
      return {
        ...state,
        photo: payload,
      };
    case ADD_ALBUM:
      return {
        ...state,
        albums: [...state.albums, payload],
        album: payload,
      };
    case ADD_PHOTO:
      return {
        ...state,
        photos: [...state.photos, payload],
        photo: payload,
      };
    case ADD_ERROR:
    case PHOTOS_ERROR:
    case PHOTO_ERROR:
    case ALBUMS_ERROR:
    case ALBUM_ERROR:
      return state;
    default:
      return state;
  }
}
