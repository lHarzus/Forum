import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const Post = ({ post }) => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate(`/post/${post.id}`);
  };
  return (
    <div className="single-post" onClick={() => onClick()}>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  );
};

Post.propTypes = {};

export default Post;
