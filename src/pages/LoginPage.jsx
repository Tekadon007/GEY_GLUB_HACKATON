import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContextProvider";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useAuth();

  return (
    <>
      <div className="register_panel">
        <h2 className="reg_text">Login User</h2>

        <input
          className="reg_input1"
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <br />
        <input
          className="reg_input2"
          type="text"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <br />
        <button
          className="double-border-button"
          onClick={() => login(username, password)}>
          Login
        </button>
      </div>
    </>
  );
};

export default LoginPage;
