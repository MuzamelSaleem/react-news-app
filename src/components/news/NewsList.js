import React, { useState, useEffect } from "react";
import { Container, Button, Form, Row, Col } from "react-bootstrap";

import newsImage from "../google-news.png";
// import Loading from "./Loading";

function NewsList(props) {
  const article = props.article;

  const handleClick = () => {
    props.onClick(article);
  };

  return (
    <div className="article" onClick={handleClick}>
      <Row className="mt-0 mb-2">
        <Col md={5} sm={6} xs={6}>
          {article.image ? (
            <img src={article.image} width="100%" alt={article.id} />
          ) : (
            <img src={newsImage} width="100%" alt={article.id} />
          )}
        </Col>
        <Col md={7} sm={6} xs={6}>
          <h5 className="news-title">{article.title}</h5>
          <a href={article.url}>{/* <p>{article.description}</p> */}</a>
        </Col>
      </Row>
      <hr />
    </div>
  );
}

export default NewsList;
