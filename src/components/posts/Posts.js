import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getPosts, addPost } from "../../actions/posts";
import { connect } from "react-redux";
import Post from "./Post";

const Posts = ({
  addPost,
  getPosts,
  posts: { posts },
  users: { logged, account },
}) => {
  useEffect(() => {
    getPosts();
  }, []);
  const [formData, setFormData] = useState({
    title: "",
    body: "",
  });
  const { title, body } = formData;

  const onChange = e => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    addPost({ title, body, userId: account.id });
    setFormData({ title: "", body: "" });
  };

  return (
    <div className="all-posts">
      {logged ? (
        <div className="create-post">
          <h2>Create new post</h2>
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
            <div className="creat-post-body">
              <p>Post message</p>
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
      <h1>Posts</h1>
      <div>
        {posts.map(p => (
          <Post post={p} />
        ))}
      </div>
    </div>
  );
};

Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  posts: PropTypes.object.isRequired,
  users: PropTypes.object.isRequired,
  addPost: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  posts: state.posts,
  users: state.users,
});

export default connect(mapStateToProps, { getPosts, addPost })(Posts);
