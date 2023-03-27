import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Button, Form, Row, Col } from 'react-bootstrap';
import './Dashboard.css';
import  NavigationBar from'./navigation/NavigationBar';
import newsImage from './google-news.png';

function Dashboard(props) {
  const [articles, setArticles] = useState([]);
  const [source, setSource] = useState("");
  const [category, setCategory] = useState("");

  const handleLogout = () => {
    props.onLogout(null);
  };

  
  useEffect(() => {
    getArticles();
  }, []);

  const getArticles = async () => {
      
    console.log(props)
    const response = await axios.get("http://localhost:8000/api/news", { headers: { Authorization: `Bearer ${props.token}` }});
    setArticles(response.data[0]);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    axios
      .get("http://localhost:8000/api/news", {
        headers: { Authorization: `Bearer ${props.token}` },
        params: {
          category: category,
          source: source,
        },
      })
      .then((response) => {
        setArticles(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Container className="Dashboard">
      <NavigationBar onLogout={handleLogout} />
      <Row>
        <Col>
          <Form onSubmit={handleSearch}>
            <Row>
                <Col>
                <Form.Select
                    aria-label="Source"
                    value={source}
                    onChange={(e) => setSource(e.target.value)}
                >
                    <option value="news-api">News API</option>
                    <option value="new-york-times">New York Times</option>
                </Form.Select>
                </Col>
                <Col>
                <Form.Select
                    aria-label="Default select example"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option value="general">General</option>
                    <option value="business">Business</option>
                    <option value="entertainment">Entertainment</option>
                    <option value="health">Health</option>
                    <option value="science">Science</option>
                    <option value="sports">Sports</option>
                    <option value="technology">Technology</option>
                    
                </Form.Select>
                </Col>
                <Col>
                <Button variant="primary" type="submit">
                    Search
                </Button>
                </Col>
            </Row>
          </Form>
        </Col>
      </Row>

      <Row>
        {articles.map((article) => (
          <Col key={Math.random().toString(36).substring(2)} md={3} sm={6} xs={12}>
            
              <div className="article">
                <h2 className='news-title'>{article.title}</h2>
                {article.image ? (
                  <img src={article.image} width="100%" alt={article.id} />
                ) : (
                  <img src={newsImage} width="100%" alt={article.id} />
                )
                }
                <a href={article.url} >
                <p>{article.description}</p>
                </a>
              </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Dashboard;
