import React, { useState } from "react";
import ValidUser from "./ValidUser";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate form input
    const errors = {};
    if (!username) {
      errors.username = "Please enter your username";
    }
    if (!password) {
      errors.password = "Please enter your password";
    }
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }
    setUsername("");
    setPassword("");
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  if (username === "admin" && password === "admin") {
    return <ValidUser />;
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white rounded-lg p-8 shadow-md">
          <h1 className="text-2xl font-bold mb-4">Login</h1>
          <form onSubmit={handleSubmit} className="flex flex-col">
            <div className="mb-4">
              <label htmlFor="username" className="font-bold mb-2">
                Username:
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={handleUsernameChange}
                className={`border border-gray-400 p-2 rounded-lg ${
                  errors.username && "border-red-500"
                }`}
              />
              {errors.username && (
                <p className="text-red-500 text-sm mt-1">{errors.username}</p>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="font-bold mb-2">
                Password:
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                className={`border border-gray-400 p-2 rounded-lg ${
                  errors.password && "border-red-500"
                }`}
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
              )}
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
            >
              Login
            </button>
          </form>
        </div>
      </div>
      {isValid ? <ValidUser /> : null}
    </>
  );
};

export default LoginForm;
