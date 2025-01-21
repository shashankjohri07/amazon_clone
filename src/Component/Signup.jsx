import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const navigate = useNavigate();

  const [error, setError] = useState("");
  const [username, setUserName] = useState("");
  const [password, setUserPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    console.log(username, password);
    axios
      .post("http://localhost:6061/register", { username, password })
      .then((response) => {
        console.log(response);

        navigate("/login");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Create account
        </h2>
        <form onSubmit={handleSubmit}>
          {/* Full Name */}
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Your name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="First and last name"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
              required
              className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="At least 6 characters"
              value={password}
              onChange={(e) => setUserPassword(e.target.value)}
              required
              className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <small className="text-xs text-gray-600">
              Password must be at least 6 characters long.
            </small>
          </div>

          {/* Display error message if passwords don't match */}
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full p-3 bg-yellow-500 text-white font-semibold rounded-md hover:bg-yellow-400 transition duration-200"
          >
            Create your Amazon account
          </button>
        </form>

        {/* Terms and Conditions */}
        <div className="mt-4 text-xs text-center text-gray-600">
          <p>
            By creating an account, you agree to Amazon's{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Conditions of Use
            </a>{" "}
            and{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Privacy Notice
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Form;