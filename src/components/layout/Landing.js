import React, { useEffect, useState, Fragment } from "react";
import PropTypes from "prop-types";
import { getPosts, getComments } from "../../actions/posts";
import { getAlbums, getPhotos } from "../../actions/albums";
import { getUsers } from "../../actions/users";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import Pagination from "./Pagination";

const Landing = ({
  getPosts,
  getComments,
  getAlbums,
  getPhotos,
  getUsers,
  posts: { posts, comments },
  albums: { albums, photos },
  users: { users },
}) => {
  const navigate = useNavigate();
  useEffect(() => {
    getPosts();
    getComments();
    getAlbums();
    getPhotos();
    getUsers();
  }, []);

  const [category, setCategory] = useState("posts");
  const [page, setPage] = useState(1);

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
      <div className="forum-body">
        <div className="forum-categories">
          <p
            className={
              category === "posts"
                ? "forum-category forum-category-selected"
                : "forum-category"
            }
            onClick={() => setCategory("posts")}>
            Posts
          </p>
          <p
            className={
              category === "albums"
                ? "forum-category forum-category-selected"
                : "forum-category"
            }
            onClick={() => setCategory("albums")}>
            Albums
          </p>
        </div>
        {posts.length > 0 && albums.length > 0 && users.length > 0 ? (
          <div className="forum-content">
            {category === "posts" ? (
              <Fragment>
                {posts.map(post => (
                  <div
                    className="forum-content-post"
                    key={post.id}
                    onClick={() => navigateTo(`/post/${post.id}`)}>
                    <div className="forum-post-title">
                      <h2>{post.title}</h2>
                    </div>
                    <div className="forum-post-body">
                      <div className="forum-post-comment">
                        {comments.filter(c => c.postId === post.id).length}
                        <i className="bi bi-chat-left-fill"></i>
                      </div>
                      <div className="forum-post-author">
                        <i className="bi bi-person-square"></i>
                        {
                          users.filter(user => user.id === post.userId)[0]
                            .username
                        }
                      </div>
                    </div>
                  </div>
                ))}
              </Fragment>
            ) : (
              <Fragment>
                {albums.map(album => (
                  <div
                    className="forum-content-post"
                    key={album.id}
                    onClick={() => navigateTo(`/album/${album.id}`)}>
                    <div className="forum-post-title">
                      <h2>{album.title}</h2>
                    </div>
                    <div className="forum-post-body">
                      <div className="forum-post-comment">
                        {photos.filter(p => p.albumId === album.id).length}
                        <i className="bi bi-images"></i>
                      </div>
                      <div className="forum-post-author">
                        <i className="bi bi-person-square"></i>
                        {
                          users.filter(user => user.id === album.userId)[0]
                            .username
                        }
                      </div>
                    </div>
                  </div>
                ))}
              </Fragment>
            )}
          </div>
        ) : (
          ""
        )}
      </div>
      <Pagination
        array={albums}
        currentPage={page}
        perPage={5}
        setPage={setPage}
      />
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
  users: PropTypes.object.isRequired,
  getUsers: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  posts: state.posts,
  albums: state.albums,
  users: state.users,
});

export default connect(mapStateToProps, {
  getPosts,
  getComments,
  getAlbums,
  getPhotos,
  getUsers,
})(Landing);
