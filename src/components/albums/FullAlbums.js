import React, { useEffect, useState, Fragment, useRef } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  getAlbumById,
  getPhotosByAlbumid,
  addPhoto,
} from "../../actions/albums";
import { getUsers } from "../../actions/users";
import gif from "../../images/Loading_icon.gif";

const FullAlbums = ({
  getAlbumById,
  getPhotosByAlbumid,
  addPhoto,
  getUsers,
  users: { account, logged, users },
  albums: { photo, album, albums },
}) => {
  const id = window.location.pathname.split("/")[2];
  useEffect(() => {
    getAlbumById(id);
    getPhotosByAlbumid(id);
    getUsers();
  }, []);

  const [photos, setPhotos] = useState({
    title: "",
    url: "",
    thumbnailUrl: "",
  });

  const [photoIndex, setPhotoIndex] = useState(0);
  const [closed, setClosed] = useState(true);

  const onClick = i => {
    setPhotoIndex(i);
  };

  const onChangeImage = side => {
    if (side === "left") {
      if (photoIndex === 0) setPhotoIndex(photo.length - 1);
      else setPhotoIndex(photoIndex - 1);
    } else {
      if (photoIndex === photo.length - 1) setPhotoIndex(0);
      else setPhotoIndex(photoIndex + 1);
    }
  };

  const { title, url, thumbnailUrl } = photos;

  const onChange = e => {
    e.preventDefault();
    setPhotos({ ...photos, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    addPhoto({ albumId: id, title, url, thumbnailUrl });
    setPhotos({ title: "", url: "", thumbnailUrl: "" });
  };

  return (
    <Fragment>
      {users.length > 0 && photo.length > 0 && album ? (
        <Fragment>
          <div className={closed ? "galery-item invisible" : "galery-item"}>
            <i className="bi bi-x close" onClick={() => setClosed(!closed)}></i>
            <i
              className="bi bi-caret-left left"
              onClick={() => onChangeImage("left")}></i>
            <i
              className="bi bi-caret-right right"
              onClick={() => onChangeImage("right")}></i>
            <div className="galery-item-img">
              <h2>{photo[photoIndex].title}</h2>
              <img src={photo[photoIndex].url}></img>
            </div>
          </div>
          <div className="all-posts">
            {logged && album.userId === account.id ? (
              <div className="create-post">
                <h2>Add Photo</h2>
                <form onSubmit={e => onSubmit(e)}>
                  <div className="creat-post-title">
                    <p>Title</p>
                    <input
                      onChange={e => onChange(e)}
                      value={title}
                      name="title"
                      type="text"
                      placeholder="title"></input>
                  </div>
                  <div className="creat-post-title">
                    <p>Image Url</p>
                    <input
                      onChange={e => onChange(e)}
                      value={url}
                      name="url"
                      type="text"
                      placeholder="title"></input>
                  </div>
                  <div className="creat-post-title">
                    <p>Thumbnail Url</p>
                    <input
                      onChange={e => onChange(e)}
                      value={thumbnailUrl}
                      name="thumbnailUrl"
                      type="text"
                      placeholder="title"></input>
                  </div>
                  <input className="btn" type="submit"></input>
                </form>
              </div>
            ) : (
              ""
            )}
            <div className="full-post">
              <p className="post-author">
                Author:{" "}
                {users.filter(u => u.id === album.userId).length > 0
                  ? users.filter(u => u.id === album.userId)[0].name
                  : ""}
              </p>
              <p className="post-title">Title: {album.title}</p>
              <div className="galery">
                {photo.map((p, i) => (
                  <img
                    src={p.url}
                    onClick={() => {
                      onClick(i);
                      setClosed(!closed);
                    }}></img>
                ))}
              </div>
            </div>
          </div>
        </Fragment>
      ) : (
        <img src={gif} />
      )}
    </Fragment>
  );
};

FullAlbums.propTypes = {
  users: PropTypes.object.isRequired,
  albums: PropTypes.object.isRequired,
  getAlbumById: PropTypes.func.isRequired,
  getPhotosByAlbumid: PropTypes.func.isRequired,
  addPhoto: PropTypes.func.isRequired,
  getUsers: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  users: state.users,
  albums: state.albums,
});

export default connect(mapStateToProps, {
  getAlbumById,
  getPhotosByAlbumid,
  addPhoto,
  getUsers,
})(FullAlbums);
