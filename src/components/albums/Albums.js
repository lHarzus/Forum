import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getAlbums, addAlbum, getPhotos } from "../../actions/albums";
import { connect } from "react-redux";
import Album from "./Album";

const Albums = ({
  addAlbum,
  getAlbums,
  getPhotos,
  albums: { albums, photos },
  users: { logged, account },
}) => {
  useEffect(() => {
    getAlbums();
    getPhotos();
  }, []);

  const [title, setTitle] = useState("");

  const onChange = e => {
    e.preventDefault();
    setTitle(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    addAlbum({ title, userId: account.id });
    setTitle("");
  };

  return (
    <div className="all-posts">
      {logged ? (
        <div className="create-post">
          <h2>Create new album</h2>
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
            <input className="btn" type="submit"></input>
          </form>
        </div>
      ) : (
        ""
      )}
      <h1>Albums</h1>
      <div className="albums-area">
        {albums.map(a => (
          <Album album={a} photos={photos} />
        ))}
      </div>
    </div>
  );
};

Albums.propTypes = {
  getAlbums: PropTypes.func.isRequired,
  albums: PropTypes.object.isRequired,
  users: PropTypes.object.isRequired,
  addAlbum: PropTypes.func.isRequired,
  getPhotos: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  albums: state.albums,
  users: state.users,
});

export default connect(mapStateToProps, { getAlbums, addAlbum, getPhotos })(
  Albums
);
