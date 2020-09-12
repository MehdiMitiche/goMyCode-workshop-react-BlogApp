import React from "react";

const Article = ({ title, body }) => {
  return (
    <div className="article">
      <div className="article-title">{title}</div>
      <div className="article-body">{body}</div>
    </div>
  );
};

export default Article;
