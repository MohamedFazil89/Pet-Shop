import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App"; // Your main app component (could be a layout)
import OrderPlace from "./Components/structures/OrderPlace";
import Login from "./Components/structures/Login";
import Signup from "./Components/structures/SignUp";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/Home" element={<App />} />
        <Route path="/OrderPlace" element={<OrderPlace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Signup />} />


      </Routes>
    </Router>
  </Provider>
);
