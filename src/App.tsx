import { usePrivy } from "@privy-io/react-auth";
import { useEffect, useState } from "react";
import "./App.css";
import logo from "./logo.svg";

function App() {
  const { login, logout, user, getAccessToken } = usePrivy();
  const [accessToken, setAccessToken] = useState<string | null>(null);

  const handleLogin = () => {
    login();
  };

  useEffect(() => {
    const logAccessToken = async () => {
      if (user) {
        const token = await getAccessToken();
        setAccessToken(token);
        console.log("Access Token:", token);
      }
    };

    logAccessToken();
  }, [user, getAccessToken]);

  return (
    <div
      className="App"
      style={{
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
        backgroundColor: "#ffffff",
        color: "#1d1d1f",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 20px",
      }}
    >
      <header
        style={{
          maxWidth: "800px",
          width: "100%",
        }}
      >
        <h1
          style={{
            fontSize: "48px",
            fontWeight: "700",
            textAlign: "center",
          }}
        >
          Privy Access Token Retriever
        </h1>

        <div
          className="instructions"
          style={{
            backgroundColor: "#f5f5f7",
            borderRadius: "18px",
            padding: "1px 30px 1px 30px",
            marginBottom: "40px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h2
            style={{
              fontSize: "28px",
              fontWeight: "600",
              marginBottom: "20px",
            }}
          >
            Instructions
          </h2>
          <ol
            style={{
              paddingLeft: "20px",
              fontSize: "18px",
              lineHeight: "1.6",
            }}
          >
            <li>Log in using your Privy credentials</li>
            <li>
              Your JWT token will be displayed below and logged in the console
            </li>
            <li>
              Use this token to authenticate in the personal asset manager app
            </li>
          </ol>
        </div>

        <div className="login-section">
          {user ? (
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "#f5f5f7",
                borderRadius: "18px",
                padding: "20px 30px",
                marginBottom: "40px",
              }}
            >
              <p style={{ fontSize: "18px" }}>
                Logged in as: {user.email?.address}
              </p>
              <button
                onClick={logout}
                style={{
                  backgroundColor: "#ffffff",
                  color: "#0071e3",
                  border: "2px solid #0071e3",
                  padding: "10px 20px",
                  borderRadius: "22px",
                  fontSize: "18px",
                  fontWeight: "600",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
              >
                Log Out
              </button>
            </div>
          ) : (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "40px",
              }}
            >
              <button
                onClick={handleLogin}
                style={{
                  backgroundColor: "#0071e3",
                  color: "white",
                  border: "none",
                  padding: "12px 24px",
                  borderRadius: "22px",
                  fontSize: "18px",
                  fontWeight: "600",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
              >
                Log In
              </button>
            </div>
          )}
        </div>

        {accessToken && (
          <div className="token-display">
            <h3
              style={{
                fontSize: "24px",
                fontWeight: "600",
                marginBottom: "20px",
              }}
            >
              Your Privy JWT Token:
            </h3>
            <textarea
              readOnly
              value={accessToken}
              rows={5}
              style={{
                width: "100%",
                padding: "15px",
                borderRadius: "12px",
                border: "1px solid #d2d2d7",
                fontSize: "16px",
                resize: "vertical",
                marginBottom: "20px",
              }}
            />
            <p style={{ fontSize: "16px", color: "#86868b" }}>
              This token has also been logged to the console.
            </p>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
