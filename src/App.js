import React, { useState } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import ShowsAPI from "./Pages/ShowsPage";
import SignIn from "./Pages/Signin";
import SignUp from "./Pages/Signup";

function App() {
  const [categorys, setCategorys] = useState([]);
  const [username, setUsername] = useState([]);

  return (
    <div>
      <h1 className="bg-black text-white text-align text-center text-3xl">
        Movies and Shows
      </h1>
      <BrowserRouter>
        <nav className="bg-black text-white text-align">
          <Link to="/">Home</Link> | <Link to="/Shows">ShowsAPI</Link> |{" "}
          <Link to="/SignIn">Sign In</Link> | <Link to="/SignUp">Sign Up</Link>
          <p>Welcome, {username}</p>
        </nav>
        <Routes>
          <Route
            path="/"
            element={
              <Homepage categorys={categorys} setCategorys={setCategorys} />
            }
          />
          <Route path="/Shows" element={<ShowsAPI />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/SignIn" element={<SignIn setUser={setUsername} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
