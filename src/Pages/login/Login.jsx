import { useState } from "react";
import './Login.scss';
import newRequest from "../../Utilis/newRequest";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate  =useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res= await newRequest.post("/auth/login",
      {
        username,
        password,
      }

     
      )
      localStorage.setItem("currentUser" , JSON.stringify(res.data))
      navigate("/")
      console.log(res.data)
    } catch (err) {
      setError(err.response.data);
      console.log(err);
    }
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <h1>Sign in</h1>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          name="username"
          type="text"
          placeholder="johndoe"
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="*****"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;