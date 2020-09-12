import React from "react";
import Article from "./Article";

const Blog = (props) => {
  return (
    <div className="blog">
      {props.articles.map((article) => (
        <Article title={article.title} body={article.text} />
      ))}
    </div>
  );
};

export default Blog;
