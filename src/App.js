import { useState } from "react";
import UserAuth from "./components/auth/UserAuth";
import Dashboard from "./components/Dashboard";

function App() {

  // const [showError, setShowError] = useState(false);
  const [token, setToken] = useState(null);
  const authToken = localStorage.getItem('token');

  const handleAuth = (token) => {
    // const authToken = localStorage.getItem('token');
    setToken(token);
  };

  return (
        <div className="App">
          {authToken ? (
            <div>
              <Dashboard onLogout={handleAuth} token={authToken} />
            </div>
          ) : (
            <div>
              <UserAuth onToken={handleAuth} />
            </div>
          )}
          </div>
  );
}

export default App;
