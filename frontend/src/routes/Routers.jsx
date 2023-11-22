import Home from "../pages/Home";
import Services from "../pages/Services";
import Login from "../pages/login";
import Signup from "../pages/Signup";
import Contact from "../pages/Contact";
import Caleg from "../pages/Caleg/Caleg";
import CalegDetail from "../pages/Caleg/CalegDetail";

import { Routes, Route } from "react-router-dom";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/caleg" element={<Caleg />} />
      <Route path="/caleg/:id" element={<CalegDetail />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Signup />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} />
    </Routes>
  );
};

export default Routers;
