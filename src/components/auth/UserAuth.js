import { Tabs, Tab } from 'react-bootstrap';
import Login from "./Login";
import Register from "./Register";

function UserAuth({ onToken }) {
     const handleLogin = (token) => {
        localStorage.setItem('token', token);
        onToken(token);
      };

      return (
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-sm-8 col-md-6">
              <h1 className="text-center">Login or Register</h1>
              <Tabs defaultActiveKey="login" id="uncontrolled-tab-example">
                <Tab eventKey="login" title="Login">
                  <Login onLogin={handleLogin} />
                </Tab>
                <Tab eventKey="register" title="Register">
                  <Register />
                </Tab>
              </Tabs>
            </div>
          </div>
        </div>
      );
}

  export default UserAuth;