import React from "react";
import newsImage from "../google-news.png";

function ShowNews(props) {
  const article = props.article;

  return (
    <div className="article">
      <div className="mb-2">
        {article.image ? (
          <img src={article.image} width="100%" alt={article.id} />
        ) : (
          <img src={newsImage} width="100%" alt={article.id} />
        )}
      </div>
      <h2 className="news-title">{article.title}</h2>
      <h5>{article.description}</h5>
      <p>{article.content}</p>
      <a href={article.url}>
        <p>Read More...</p>
      </a>
    </div>
  );
}

export default ShowNews;
