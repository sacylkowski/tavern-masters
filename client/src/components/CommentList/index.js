import React from 'react';
import { Link } from 'react-router-dom';

const CommentList = ({ comments }) => {
  return (
    <div className="">
  <div className="">
    <span className="">Comments</span>
  </div>
  <div className="">
    {comments &&
      comments.map(comment => (
        <p className="" key={comment._id}>
          {comment.commentBody} {'// '}
          <Link to={`/profile/${comment.username}`} style={{ fontWeight: 700 }}>
            {comment.username} on {comment.createdAt}
          </Link>
        </p>
      ))}
  </div>
</div>
  );
};

export default CommentList;