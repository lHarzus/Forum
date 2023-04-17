import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  getPostById,
  getCommentsByPostid,
  addComment,
} from "../../actions/posts";

const FullPost = ({
  getPostById,
  getCommentsByPostid,
  addComment,
  users: { account, logged },
  posts: { post, comment },
}) => {
  const id = window.location.pathname.split("/")[2];
  useEffect(() => {
    getPostById(id);
    getCommentsByPostid(id);
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
    <div className="all-posts">
      <div className="full-post">
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </div>

      <div className="comments">
        {comment.map(c => (
          <div className="comment">
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
  );
};

FullPost.propTypes = {
  users: PropTypes.object.isRequired,
  posts: PropTypes.object.isRequired,
  getPostById: PropTypes.func.isRequired,
  getCommentsByPostid: PropTypes.func.isRequired,
  addComment: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  users: state.users,
  posts: state.posts,
});

export default connect(mapStateToProps, {
  getPostById,
  getCommentsByPostid,
  addComment,
})(FullPost);
