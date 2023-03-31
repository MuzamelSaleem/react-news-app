import React, { useState, useEffect } from "react";
import axios from "axios";
// import { Container, Button, Form, Row, Col } from 'react-bootstrap';
import Loading from "./Loading";

function Profile() {
  const [source, setSource] = useState("");
  const [category, setCategory] = useState("");
  const [author, setAuthor] = useState("");
  const token = localStorage.getItem("token");
  const [name, setName] = useState([]);
  const [email, setEmail] = useState([]);
  const [sources, setSources] = useState([]);
  const [categories, setCategories] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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
    getPreferences();
  }, []);

  const headers = {
    Authorization: `Bearer ${token}`,
  };

  const getPreferences = async () => {
    // const response = await axios.get("http://localhost:8000/api/preferences", { headers: { Authorization: `Bearer ${token}` }});
    const response = await axios.get("http://localhost:8000/api/preferences", {
      headers,
    })
    .then((response) => {
        console.log(response.data);
        const user = response.data.user;
        const preferences = response.data.preferences;
        setIsLoading(false);
        setName(user.name);
        setEmail(user.email);
        setCategory(preferences.category);
        setSource(preferences.source);
        setAuthor(preferences.author);
      })
      .catch((error) => {
        console.log(error);
      });
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    axios
      .post("http://localhost:8000/api/update-preferences", {
        category: category,
        source: source,
        author: author,
      },
      {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        console.log(response);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1>Profile Page</h1>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="row row-cols-2">
          <form className="p-5" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Name
              </label>
              <input
                className="form-control"
                type="text"
                disabled
                value={name}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                Email
              </label>
              <input
                className="form-control"
                type="text"
                disabled
                value={email}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="sources" className="form-label">
                Source
              </label>
              <select
                className="form-select"
                id="sources"
                value={source}
                onChange={(e) => setSource(e.target.value)}
              >
                <option value="">Select an option</option>
                {sources.map((option) => (
                  <option value={option.key} key={option.key}>
                    {option.value}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="categories" className="form-label">
                Category
              </label>
              <select
                className="form-select"
                id="categories"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">Select an option</option>
                {categories.map((option) => (
                  <option value={option} key={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="authors" className="form-label">
                Author
              </label>
              <select
                className="form-select"
                id="authors"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              >
                <option value="">Select an option</option>
                {authors.map((option) => (
                  <option value={option} key={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Profile;
