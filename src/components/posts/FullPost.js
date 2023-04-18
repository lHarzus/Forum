import React, { useEffect, useState, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  getPostById,
  getCommentsByPostid,
  addComment,
} from "../../actions/posts";
import { getUsers } from "../../actions/users";
import gif from "../../images/Loading_icon.gif";

const FullPost = ({
  getPostById,
  getCommentsByPostid,
  addComment,
  getUsers,
  users: { account, logged, users },
  posts: { post, comment },
}) => {
  const id = window.location.pathname.split("/")[2];
  useEffect(() => {
    getPostById(id);
    getCommentsByPostid(id);
    getUsers();
  }, []);

  const [comments, setComments] = useState({
    name: "",
    body: "",
  });

  const { name, body } = comments;

  const onChange = e => {
    e.preventDefault();
    setComments({ ...comments, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    addComment({ postId: id, name, body, email: account.email });
    setComments({ name: "", body: "" });
  };

  return (
    <Fragment>
      {post && comment && users.length > 0 ? (
        <div className="all-posts">
          <div className="full-post">
            <p className="post-author">
              Author:{" "}
              {users.filter(u => u.id === post.userId) > 0
                ? users.filter(u => u.id === post.userId)[0].name
                : ""}
            </p>
            <p className="post-title">Title: {post.title}</p>
            <p className="post-body">{post.body}</p>
          </div>
          <div className="comments">
            {comment.map(c => (
              <div
                className={
                  logged && account.email === c.email
                    ? "comment-owner"
                    : "comment"
                }
                key={c.id}>
                <p>{c.email}</p>
                <h3>Title: {c.name}</h3>
                <p>Comment: {c.body}</p>
              </div>
            ))}
          </div>
          {logged ? (
            <div className="create-post">
              <h2>Comment</h2>
              <form onSubmit={e => onSubmit(e)}>
                <div className="creat-post-title">
                  <p>Title</p>
                  <input
                    onChange={e => onChange(e)}
                    value={name}
                    name="name"
                    type="text"
                    placeholder="title"></input>
                </div>
                <div className="creat-post-body">
                  <p>Comment</p>
                  <input
                    onChange={e => onChange(e)}
                    value={body}
                    name="body"
                    type="text"
                    placeholder="title"></input>
                </div>
                <input className="btn" type="submit"></input>
              </form>
            </div>
          ) : (
            ""
          )}
        </div>
      ) : (
        <img src={gif} />
      )}
    </Fragment>
  );
};

FullPost.propTypes = {
  users: PropTypes.object.isRequired,
  posts: PropTypes.object.isRequired,
  getPostById: PropTypes.func.isRequired,
  getCommentsByPostid: PropTypes.func.isRequired,
  addComment: PropTypes.func.isRequired,
  getUsers: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  users: state.users,
  posts: state.posts,
});

export default connect(mapStateToProps, {
  getPostById,
  getCommentsByPostid,
  addComment,
  getUsers,
})(FullPost);
