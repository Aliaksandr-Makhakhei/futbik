import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import Login from "../components/Login";
import SignUp from "../components/SignUp";
import StadiumDetails from "../components/StadiumDetails";
import Account from "../components/Account";
import AdminPanel from "../components/AdminPanel";
import "./App.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="account" element={<Account />} />
        <Route path="stadium/:stadiumId" element={<StadiumDetails />} />
        <Route path="admin" element={<AdminPanel />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
