import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Button, Form, Row, Col } from "react-bootstrap";
import "./Dashboard.css";
import newsImage from "./google-news.png";
import Loading from "./Loading";
import NewsList from "./news/NewsList";
import ShowNews from "./news/ShowNews";

function Dashboard(props) {
  const [articles, setArticles] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [source, setSource] = useState("");
  const [category, setCategory] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [article, setArticle] = useState([]);
  const [sources, setSources] = useState([]);
  const [categories, setCategories] = useState([]);
  const [authors, setAuthors] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    setSources([
      { key: "news-api", value: "News Api" },
      { key: "new-york-times", value: "New York Times" },
    ]);
    setCategories([
      "general",
      "business",
      "entertainment",
      "health",
      "science",
      "sports",
      "technology",
    ]);
    setAuthors([
      "general",
      "business",
      "entertainment",
      "health",
      "science",
      "sports",
      "technology",
    ]);
    getArticles();
  }, []);

  const getArticles = async () => {
    const response = await axios.get("http://localhost:8000/api/news", {
      headers: { Authorization: `Bearer ${props.token}` },
    });
    setArticles(response.data[0]);
    setArticle(response.data[0][0]);
    setIsLoading(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setIsLoading(true);
    axios
      .get("http://localhost:8000/api/news", {
        headers: { Authorization: `Bearer ${props.token}` },
        params: {
          category: category,
          source: source,
          searchkeyword: searchKeyword,
        },
      })
      .then((response) => {
        setArticles(response.data[0]);
        setArticle(response.data[0][0]);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleClickNews = (article) => {
    setArticle(article);
  };

  return (
    <Container className="Dashboard">
      <Row className="mt-3 mb-0">
        <Col>
          <Form onSubmit={handleSearch}>
            <Row>
              <Col className="mt-0 mb-2" md={3} sm={12} xs={12}>
                <Form.Control
                  type="text"
                  value={searchKeyword}
                  onChange={(event) => setSearchKeyword(event.target.value)}
                />
              </Col>
              <Col className="mt-0 mb-2" md={3} sm={12} xs={12}>
                <Form.Select
                  aria-label="Source"
                  value={source}
                  onChange={(e) => setSource(e.target.value)}
                >
                  {sources.map((option) => (
                    <option value={option.key} key={option.key}>
                      {option.value}
                    </option>
                  ))}
                </Form.Select>
              </Col>
              <Col className="mt-0 mb-2" md={3} sm={12} xs={12}>
                <Form.Select
                  aria-label="Default select example"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  {categories.map((option) => (
                    <option value={option} key={option}>
                      {option}
                    </option>
                  ))}
                </Form.Select>
              </Col>
              <Col className="mt-0 mb-2" md={3} sm={12} xs={12}>
                <Button variant="primary" type="submit">
                  Search
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>

      <hr />

      {isLoading ? (
        <Loading />
      ) : (
        <Row>
          <Col
            key={Math.random().toString(36).substring(2)}
            md={8}
            sm={12}
            xs={12}
          >
            <ShowNews article={article} />
          </Col>
          <Col
            key={Math.random().toString(36).substring(2)}
            md={4}
            sm={6}
            xs={12}
          >
            <Row>
              {articles.map((article) => (
                <Col
                  key={Math.random().toString(36).substring(2)}
                  md={12}
                  sm={12}
                  xs={12}
                >
                  <NewsList article={article} onClick={handleClickNews} />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      )}
    </Container>
  );
}

export default Dashboard;
