import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getPostByUserId } from "../../actions/posts";
import { getAlbumsByUserId } from "../../actions/albums";

const Profile = ({
  users: { logged, account },
  posts: { post },
  albums: { album, photos },
  getAlbumsByUserId,
  getPostByUserId,
}) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!logged) {
      navigate("/login");
    }
    getPostByUserId(account.id);
    getAlbumsByUserId(account.id);
  }, []);

  const navigateTo = path => {
    navigate(path);
  };

  const [option, setOption] = useState("info"); //info, posts, albums

  const changeOption = opt => {
    setOption(opt);
  };

  return (
    <div className="body">
      <div className="profile-grid">
        <div className="profile-menu">
          <p
            className={option === "info" ? "selected" : ""}
            onClick={() => changeOption("info")}>
            Account info
          </p>
          <p
            className={option === "posts" ? "selected" : ""}
            onClick={() => changeOption("posts")}>
            My posts
          </p>
          <p
            className={option === "albums" ? "selected" : ""}
            onClick={() => changeOption("albums")}>
            My albums
          </p>
        </div>
        <div className="profile-option">
          {option === "info" ? (
            <div className="info">
              <p className="bold">Info:</p>
              <div className="block">
                <p className="bold inline">Name: </p>{" "}
                <p className="inline"> {account.name}</p>
              </div>
              <div className="block">
                <p className="bold">Username: </p> <p> {account.username}</p>
              </div>
              <div className="block">
                <p className="bold">Email: </p> <p> {account.email}</p>
              </div>
              <div className="block">
                <p className="bold">Phone: </p> <p> {account.phone}</p>
              </div>
              <div className="block">
                <p className="bold">Website: </p> <p> {account.website}</p>
              </div>
              <p className="bold">Address: </p>
              <div className="block">
                <p className="bold"> Street: </p>{" "}
                <p> {account.address.street}</p>
              </div>
              <div className="block">
                <p className="bold"> Suite: </p> <p> {account.address.suite}</p>
              </div>
              <div className="block">
                <p className="bold"> City: </p> <p> {account.address.city}</p>
              </div>
              <div className="block">
                <p className="bold"> ZipCode: </p>{" "}
                <p> {account.address.zipcode}</p>
              </div>
              <p className="bold">Geo Coords:</p>
              <div className="block">
                <div>
                  <span className="bold"> lat: </span>{" "}
                  <span> {account.address.geo.lat}</span>
                </div>
                <div>
                  <span className="bold"> lng: </span>{" "}
                  <span> {account.address.geo.lng}</span>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
          {option === "posts" ? (
            <div className="posts-area">
              {post.map(p =>
                p ? (
                  <div
                    className="post"
                    key={p.id}
                    onClick={() => navigateTo(`/post/${p.id}`)}>
                    <h2 className="title">{p.title}</h2>
                    <p>{p.body}</p>
                  </div>
                ) : (
                  ""
                )
              )}
            </div>
          ) : (
            ""
          )}
          <div className="albums-area">
            {option === "albums"
              ? album.map(a => (
                  <div
                    className="album"
                    key={a.id}
                    onClick={() => navigateTo(`/album/${a.id}`)}>
                    <h2 className="title">{a.title}</h2>
                    <img
                      src={
                        photos.filter(p => p.albumId === a.id)[0]
                          ? photos.filter(p => p.albumId === a.id)[0].url
                          : ""
                      }></img>
                    <img
                      src={
                        photos.filter(p => p.albumId === a.id)[1]
                          ? photos.filter(p => p.albumId === a.id)[1].url
                          : ""
                      }></img>
                    <img
                      src={
                        photos.filter(p => p.albumId === a.id)[2]
                          ? photos.filter(p => p.albumId === a.id)[2].url
                          : ""
                      }></img>
                    <p className="bottom">
                      Photos: {photos.filter(p => p.albumId === a.id).length}
                    </p>
                  </div>
                ))
              : ""}
          </div>
        </div>
      </div>
    </div>
  );
};

Profile.propTypes = {
  users: PropTypes.object.isRequired,
  posts: PropTypes.object.isRequired,
  albums: PropTypes.object.isRequired,
  getAlbumsByUserId: PropTypes.func.isRequired,
  getPostByUserId: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  users: state.users,
  posts: state.posts,
  albums: state.albums,
});

export default connect(mapStateToProps, { getAlbumsByUserId, getPostByUserId })(
  Profile
);
