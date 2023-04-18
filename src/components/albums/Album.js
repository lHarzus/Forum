import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

const Album = ({ album, photos }) => {
  const navigate = useNavigate();

  const navigateTo = path => {
    navigate(path);
  };
  return (
    <div
      className="album"
      key={album.title}
      onClick={() => navigateTo(`/album/${album.id}`)}>
      <h2 className="title">{album.title}</h2>
      <img
        src={
          photos.filter(p => p.albumId === album.id)[0]
            ? photos.filter(p => p.albumId === album.id)[0].url
            : ""
        }></img>
      <img
        src={
          photos.filter(p => p.albumId === album.id)[1]
            ? photos.filter(p => p.albumId === album.id)[1].url
            : ""
        }></img>
      <img
        src={
          photos.filter(p => p.albumId === album.id)[2]
            ? photos.filter(p => p.albumId === album.id)[2].url
            : ""
        }></img>
      <p className="bottom">
        Photos: {photos.filter(p => p.albumId === album.id).length}
      </p>
    </div>
  );
};

Album.propTypes = {
  albums: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  albums: state.albums,
});

export default connect(mapStateToProps)(Album);
