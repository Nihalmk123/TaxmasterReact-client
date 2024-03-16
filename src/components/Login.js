import React, { useState } from "react";
import { useToast } from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const toast = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      username: username,
      password: password,
    };

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/login/",
        formData
      );
      if (response.status === 200) {
        //get the token from the backend response
        const token = response.data.token;
        //  to Store token in local storage
        localStorage.setItem("token", token);
        // Show success toast
        toast({
          title: "Login successful",
          description: "You've successfully logged in.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        navigate("/");
      } else {
        // Handle unsuccessful login
        console.error("Login failed");
      }
    } catch (error) {
      toast({
        title: "Login failed",
        description: "Please enter correct details.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      console.error("Error occurred while logging in:", error);
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
          <h1 className="text-center mb-3">Login</h1>
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

export default Login;
