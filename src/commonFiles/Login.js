import React, { useState } from "react";

import Signup from "./Singup";

const Login = () => {
  const [showSignup, setShowSignup] = useState(false);

  const handleSignupClick = () => {
    setShowSignup(true);
  };

  return (
    <div className="container text-center mt-5">
      <h1>Login</h1>
      <h4 className="text-3xl font-bold underline">Working on it...💻</h4>
      {showSignup ? (
        <Signup />
      ) : (
        <button
          onClick={handleSignupClick}
          className="bg-indigo-600 text-white px-4 py-2 rounded-md mt-4"
        >
          Signup
        </button>
      )}
    </div>
  );
};

export default Login;
