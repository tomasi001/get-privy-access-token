import { usePrivy } from "@privy-io/react-auth";
import { useEffect } from "react";
import "./App.css";
import logo from "./logo.svg";

function App() {
  const { login, logout, user, getAccessToken } = usePrivy();

  const handleLogin = async () => {
    await login(); // Capture the access token
  };

  useEffect(() => {
    const logAccessToken = async () => {
      const accessToken = await getAccessToken();
      console.log("Access Token:", accessToken); // Log the access token
    };

    logAccessToken(); // Call the function
  }, [getAccessToken]); // Add dependencies as needed

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>Welcome to My Privy App</h1>
          <div>
            {user ? (
              <div>
                <p>Logged in as:</p>
                <p> {user.email?.address}</p>
                <button onClick={logout}></button>
              </div>
            ) : (
              <button onClick={handleLogin}>Log In</button> // Updated to use handleLogin
            )}
          </div>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
