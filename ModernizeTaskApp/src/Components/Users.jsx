import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Users() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [isSignup, setIsSignup] = useState(true);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    pass1: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const url = isSignup
        ? "https://taskapi-47rw.onrender.com/api/users/signup"
        : "https://taskapi-47rw.onrender.com/api/users/signin";

      const payload = isSignup
        ? {
            name: form.name,
            phone: form.phone,
            email: form.email,
            pass1: form.pass1
          }
        : {
            email: form.email,
            pass1: form.pass1
          };

      const res = await axios.post(url, payload, {
        headers: { "Content-Type": "application/json" }
      });

      if (isSignup) {
        alert(res.data.message || "Signup successful! Please login.");
        setIsSignup(false);
      } else {
        // Save token in context + localStorage
        if (res.data.token) {
          login(res.data.token);
          navigate("/tasks");
        } else {
          alert("Login successful, but token not found.");
        }
      }
    } catch (err) {
  console.error("API Error Full:", err); // See full error object in console
  console.log("Response data:", err.response?.data); // See API's message
  alert(
    err.response?.data?.message ||
    JSON.stringify(err.response?.data) || // Show raw API response if no message key
    err.message
  )}
}


  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>{isSignup ? "Signup" : "Login"}</h2>
      <form onSubmit={handleSubmit}>
        {isSignup && (
          <>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <br />
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              value={form.phone}
              onChange={handleChange}
              required
            />
            <br />
          </>
        )}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <br />
        <input
          type="password"
          name="pass1"
          placeholder="Password"
          value={form.pass1}
          onChange={handleChange}
          required
        />
        <br />
        <button type="submit" style={{ marginTop: "10px" }}>
          {isSignup ? "Signup" : "Login"}
        </button>
      </form>

      <button
        onClick={() => setIsSignup(!isSignup)}
        style={{ marginTop: "10px" }}
      >
        {isSignup
          ? "Already have an account? Login"
          : "Don't have an account? Signup"}
      </button>
    </div>
  );
}
