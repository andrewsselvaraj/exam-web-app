import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleLogin(event) {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://107.155.116.31:5678/login",
        { user_name: username, password },
      );

      if (response.data !== null) {
        localStorage.setItem('userInfo', JSON.stringify(response.data))
        navigate("/dashboard");
      } else {
        // handle login error
      }
    } catch (error) {
      // handle error
    }
  }

  return (
    <form onSubmit={handleLogin}>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </label>
      <br />
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginPage
