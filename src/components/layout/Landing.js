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
      <div className="forum-body">
        <div className="forum-categories">
          <p
            className={
              category === "posts"
                ? "forum-category forum-category-selected"
                : "forum-category"
            }
            onClick={() => {
              setCategory("posts");
              setPage(1);
            }}>
            Posts
          </p>
          <p
            className={
              category === "albums"
                ? "forum-category forum-category-selected"
                : "forum-category"
            }
            onClick={() => {
              setCategory("albums");
              setPage(1);
            }}>
            Albums
          </p>
        </div>
        {posts.length > 0 && albums.length > 0 && users.length > 0 ? (
          <div className="forum-content">
            {category === "posts" ? (
              <Fragment>
                {Array.from(
                  { length: 5 },
                  (_, i) => i + (page - 1) * 5 + 1
                ).map(i => {
                  if (posts[i])
                    return (
                      <div
                        className="forum-content-post"
                        key={posts[i].id}
                        onClick={() => navigateTo(`/post/${posts[i].id}`)}>
                        <div className="forum-post-title">
                          <h2>{posts[i].title}</h2>
                        </div>
                        <div className="forum-post-body">
                          <div className="forum-post-comment">
                            {
                              comments.filter(c => c.postId === posts[i].id)
                                .length
                            }
                            <i className="bi bi-chat-left-fill"></i>
                          </div>
                          <div className="forum-post-author">
                            <i className="bi bi-person-square"></i>
                            {
                              users.filter(
                                user => user.id === posts[i].userId
                              )[0].username
                            }
                          </div>
                        </div>
                      </div>
                    );
                })}
              </Fragment>
            ) : (
              <Fragment>
                {Array.from(
                  { length: 5 },
                  (_, i) => i + (page - 1) * 5 + 1
                ).map(i => {
                  if (albums[i])
                    return (
                      <div
                        className="forum-content-post"
                        key={albums[i].id}
                        onClick={() => navigateTo(`/album/${albums[i].id}`)}>
                        <div className="forum-post-title">
                          <h2>{albums[i].title}</h2>
                        </div>
                        <div className="forum-post-body">
                          <div className="forum-post-comment">
                            {
                              photos.filter(p => p.albumId === albums[i].id)
                                .length
                            }
                            <i className="bi bi-images"></i>
                          </div>
                          <div className="forum-post-author">
                            <i className="bi bi-person-square"></i>
                            {
                              users.filter(
                                user => user.id === albums[i].userId
                              )[0].username
                            }
                          </div>
                        </div>
                      </div>
                    );
                })}
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
