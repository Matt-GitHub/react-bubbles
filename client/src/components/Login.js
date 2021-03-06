import React, { useState } from "react";
import axios from "axios";

const Login = props => {
  const [data, setData] = useState({
    username: "",
    password: ""
  });

  const handleChanges = e => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/login", data)
      .then(res => {
        console.log(res.data);
        console.log("this is props", props);
        localStorage.setItem("token", res.data.payload);
        // props.props.history.push("/friends")
      })
      .catch(err => {
        console.log("eeeeeeee", err);
      });
  };

  return (
    <>
      <h1>Login Here</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="username"
            value={data.username}
            onChange={handleChanges}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            onChange={handleChanges}
            value={data.password}
            required
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
};

export default Login;
