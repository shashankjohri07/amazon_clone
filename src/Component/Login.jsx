// src/components/Login.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "./redux/slices/authSlice";
import axios from "axios";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [username, setUserName] = useState("");
  const [password, setUserPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");
    axios
      .post("http://localhost:6061/login", { username, password })
      .then((response) => {
        const { token, refresh_token } = response?.data;
        dispatch(setUser({ username }));
        localStorage.setItem("token", token);
        localStorage.setItem("refresh_token", refresh_token);

        navigate("/");
        console.log(response);
      })
      .catch((err) => {
        const errMessage =
          err?.response?.data?.message || "Something went wrong";
        setError(errMessage);
      });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Container */}
      <form
        className="w-full max-w-sm p-6 bg-white shadow-md rounded-lg"
        onSubmit={handleLogin}
      >
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
            alt="Amazon Logo"
            className="w-24"
          />
        </div>

        {/* Login Form */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">Sign-In</h2>

          {/* User Name Input */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              User Name
            </label>
            <input
              type="text"
              id="name"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
              className="w-full px-3 py-2 mt-1 border rounded-md focus:ring focus:ring-yellow-500 focus:outline-none"
              placeholder="Enter your name"
            />
          </div>

          {/* Password Input */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setUserPassword(e.target.value)}
              className="w-full px-3 py-2 mt-1 border rounded-md focus:ring focus:ring-yellow-500 focus:outline-none"
              placeholder="Enter your password"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-yellow-500 rounded-md hover:bg-yellow-600 focus:outline-none focus:ring focus:ring-yellow-500"
          >
            Sign In
          </button>
        </div>

        {error && <div className="text-red-500">{error}</div>}

        {/* Create Account Link */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            New to Amazon?{" "}
            <Link to="/signup" className="text-yellow-500 hover:underline">
              Create your Amazon account
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
