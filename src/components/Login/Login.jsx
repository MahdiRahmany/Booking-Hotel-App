import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="loginContainer">
      <h2>Login</h2>
      <form action="" className="form">
        <div className="formControl">
          <label htmlFor="email">Email</label>
          <input value={email} type="text" name="email" id="email" />
        </div>
        <div className="formControl">
          <label htmlFor="password">Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name="password"
            id="password"
          />
        </div>
        <div className="buttons">
          <buttons className="btn btn--primary">Login</buttons>
        </div>
      </form>
    </div>
  );
}

export default Login;
