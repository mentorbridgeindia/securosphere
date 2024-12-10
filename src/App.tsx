import React, { useState } from "react";
import "./App.css";
import AppNavbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [email, setEmail] = useState("");
  const [response, setResponse] = useState(null);

  const simulateApiCall = async () => {
    try {
      // Simulating an API error
      const res = await fetch("https://api.example.com/non-existent-endpoint");
      if (!res.ok) {
        throw new Error(`API Error: ${res.status} - ${res.statusText}`);
      }
      const data = await res.json();
      setResponse(data);
    } catch (error) {
      console.error("API call failed:", error);
    }
  };

  const validateForm = () => {
    try {
      if (!email) {
        throw new Error("Validation Error: Email field is empty.");
      }
      if (!/\S+@\S+\.\S+/.test(email)) {
        throw new Error("Validation Error: Invalid email format.");
      }
      alert("Form submitted successfully!");
    } catch (error) {
      console.error("Form validation failed:", error);
    }
  };
  
  return (
    <div className="App">
      {/* React-Bootstrap Navbar */}
      <AppNavbar />

      <div
        className="main-content"
        style={{
          display: "grid",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>Sentry Demo</h1>

        {/* Form Validation Example */}
        <div className="mb-5">
          <h5>Form Validation Example</h5>
          <input
            type="email"
            className="form-control mb-5 w-100"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={validateForm} className="btn btn-warning">
            Submit Form
          </button>
        </div>

        <div className="mb-4">
          <h5>Simulated API Call</h5>
          <button onClick={simulateApiCall} className="btn btn-danger">
            Make API Call
          </button>
          {response && (
            <p className="mt-2">Response: {JSON.stringify(response)}</p>
          )}
        </div>
<button onClick={() => {throw new Error("This is your first error!");}} className="btn btn-primary">Break the world</button>
        
      </div>
    </div>
  );
}

export default App;
