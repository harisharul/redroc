import React from "react";
import { useMsal } from "@azure/msal-react";

function App() {
  const { instance, accounts } = useMsal();
  const account = accounts[0];

  const handleLogout = () => {
    instance.logoutRedirect();
  };

  if (!account) {
    return (
      <div style={{ padding: "40px", fontFamily: "Arial" }}>
        <h2>Welcome to RedRoc</h2>
        <p>Please sign in to continue.</p>
        <button onClick={() => instance.loginRedirect()}>
          Sign in
        </button>
      </div>
    );
  }

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>Welcome to RedRoc 👋</h1>

      <p>
        You have successfully signed in to the <strong>RedRoc External
        Identity Demo Application</strong>.
      </p>

      <hr style={{ margin: "20px 0" }} />

      <h3>Your session details</h3>
      <ul>
        <li>
          <strong>Name:</strong>{" "}
          {account.name || "Not provided"}
        </li>
        <li>
          <strong>Login ID:</strong>{" "}
          {account.username}
        </li>
        <li>
          <strong>Tenant:</strong>{" "}
          RedRoc External Identity
        </li>
      </ul>

      <p style={{ marginTop: "20px", color: "#555" }}>
        This application uses Microsoft Entra External ID for secure
        customer authentication.
      </p>

      <button
        onClick={handleLogout}
        style={{
          marginTop: "30px",
          padding: "10px 16px",
          cursor: "pointer",
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default App;
