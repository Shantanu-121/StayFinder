import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import Error from "./pages/Error";
import Login from "./pages/Login";
import { Dashboard } from "./pages/Dashboard";
import { Catalog } from "./pages/Catalog";
import { Property } from "./pages/Property";
import { Toaster } from "react-hot-toast";
import { Booked } from "./pages/Booked";
import Signup from "./pages/Signup";
import VerifyEmail from "./components/core/Auth/VerifyEmail";

function App() {
  return (
    <div>
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="*" element={<Error />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/Dashboard" element={<Dashboard />}></Route>
        <Route path="/Catalog" element={<Catalog />}></Route>
        <Route path="/property/:propertyId" element={<Property />}></Route>
        <Route path="/booked" element={<Booked />}></Route>
        <Route path="/verify-email" element={<VerifyEmail />}></Route>
      </Routes>
    </div>
  );
}

export default App;
