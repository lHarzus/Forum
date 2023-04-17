import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { getPosts, getComments } from "../../actions/posts";
import { getAlbums, getPhotos } from "../../actions/albums";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

const Landing = ({
  getPosts,
  getComments,
  getAlbums,
  getPhotos,
  posts: { posts, comments },
  albums: { albums, photos },
}) => {
  const navigate = useNavigate();
  useEffect(() => {
    getPosts();
    getComments();
    getAlbums();
    getPhotos();
  }, []);
  const navigateTo = path => {
    navigate(path);
  };
  return (
    <div className="body">
      <div className="posts">
        <h1 onClick={() => navigateTo("/posts")}>
          Posts <i className="bi bi-arrow-right"></i>
        </h1>
        <div className="posts-area">
          {Array.from(Array(6).keys()).map(i =>
            posts[i] ? (
              <div
                className="post"
                key={i}
                onClick={() => navigateTo(`/post/${posts[i].id}`)}>
                <h2 className="title">{posts[i].title}</h2>
                <p>{posts[i].body}</p>
                <p className="bottom">
                  Comments:{" "}
                  {comments.filter(c => c.postId === posts[i].id).length}
                </p>
              </div>
            ) : (
              ""
            )
          )}
        </div>
      </div>
      <div className="albums">
        <h1 onClick={() => navigateTo("/albums")}>
          Albums <i className="bi bi-arrow-right"></i>
        </h1>
        <div className="albums-area">
          {Array.from(Array(6).keys()).map(i =>
            albums[i] ? (
              <div
                className="album"
                key={i}
                onClick={() => navigateTo(`/album/${albums[i].id}`)}>
                <h2 className="title">{albums[i].title}</h2>
                <img
                  src={
                    photos.filter(p => p.albumId === albums[i].id)[0]
                      ? photos.filter(p => p.albumId === albums[i].id)[0].url
                      : ""
                  }></img>
                <img
                  src={
                    photos.filter(p => p.albumId === albums[i].id)[1]
                      ? photos.filter(p => p.albumId === albums[i].id)[1].url
                      : ""
                  }></img>
                <img
                  src={
                    photos.filter(p => p.albumId === albums[i].id)[2]
                      ? photos.filter(p => p.albumId === albums[i].id)[2].url
                      : ""
                  }></img>
                <p className="bottom">
                  Photos:{" "}
                  {photos.filter(p => p.albumId === albums[i].id).length}
                </p>
              </div>
            ) : (
              ""
            )
          )}
        </div>
      </div>
    </div>
  );
};

Landing.propTypes = {
  getPosts: PropTypes.func.isRequired,
  getComments: PropTypes.func.isRequired,
  getAlbums: PropTypes.func.isRequired,
  getPhotos: PropTypes.func.isRequired,
  posts: PropTypes.object.isRequired,
  albums: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  posts: state.posts,
  albums: state.albums,
});

export default connect(mapStateToProps, {
  getPosts,
  getComments,
  getAlbums,
  getPhotos,
})(Landing);
