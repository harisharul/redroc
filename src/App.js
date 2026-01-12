import React from "react";
import { Routes, Route } from "react-router-dom";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "./authConfig";

function Home() {
  const { instance, accounts } = useMsal();

  const login = () => {
    instance.loginRedirect(loginRequest);
  };

  const logout = () => {
    instance.logoutRedirect();
  };

  if (accounts.length > 0) {
    return (
      <div style={{ padding: 40 }}>
        <h2>Welcome</h2>
        <p>{accounts[0].username}</p>
        <button onClick={logout}>Logout</button>
      </div>
    );
  }

  return (
    <div style={{ padding: 40 }}>
      <h2>RedRoc App</h2>
      <button onClick={login}>Login</button>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth/callback" element={<div>Signing you in…</div>} />
    </Routes>
  );
}