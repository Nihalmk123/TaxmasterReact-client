import axios from "axios";
import React, { useState } from "react";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const toast = useToast();
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:8000/signup/", {
        username,
        email,
        password,
      });
      if (response.status === 200) {
        // Show toast message
        toast({
          title: "Signup successful",
          description: "You've successfully signed up.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        navigate("/login");
        // Clear form fields
        setUsername("");
        setPassword("");
        setEmail("");
      } else {
        // Signup failed
        toast({
          title: "Signup failed",
          description: "Please try again later.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
    } catch (error) {
      console.error("Error:", error);
      toast({
        title: "An error occurred",
        description: "Please try again later.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <div>
      <div className="container mt-5 mb-5">
        <form
          className="col-6 mx-auto card p-3 shadow-sm "
          style={{ backgroundColor: "#F5F7F8" }}
          onSubmit={handleSubmit}
        >
          <h1 className="text-center mb-3">Signup</h1>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              USER NAME
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="form-control"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              EMAIL
            </label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              PASSWORD
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
            />
          </div>
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
