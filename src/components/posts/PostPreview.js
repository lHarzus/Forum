import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const PostPreview = ({ post, comments, users }) => {
  const navigateTo = path => {
    navigate(path);
  };
  return (
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
          {users.filter(user => user.id === post.userId)[0].username}
        </div>
      </div>
    </div>
  );
};

PostPreview.propTypes = {};

export default PostPreview;
