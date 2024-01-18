import React from "react";
import { Link } from "react-router-dom";

const postlisting = () => {
  return (
    <>
      <div>Postlisting listing</div>
      {post_list.map((post) => (
        <div key={post.id}>
          <p>{post.title}</p>
          <Link to={`/${post.id}/`}>Read more</Link>
        </div>
      ))}
    </>
  );
};

export default postlisting;
