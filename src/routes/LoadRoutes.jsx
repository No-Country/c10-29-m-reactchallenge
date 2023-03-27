import * as React from "react";
import { useSelector } from "react-redux";
import { Routes, Route, Link } from "react-router-dom";
import { 
  Home, 
  About, 
  ContactUs, 
  Sell,
  Buy,
  NotMatch,  
} from "../pages";

const GuestRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route exact path="*" element={<NotMatch />} />
    </Routes>
  )
}

const SellerRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/sell/" element={<Sell />} />
      <Route exact path="*" element={<NotMatch />} />
    </Routes>
  )
}

const BuyerRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/buy/" element={<Buy />} />
      <Route exact path="*" element={<NotMatch />} />
    </Routes>
  )
}

const routesByRole = {
  seller: <SellerRoutes/>,
  buyer: <BuyerRoutes/>,
  guest: <GuestRoutes/>,
};

const LoadRoutes = () => {
  const user = useSelector((store) => store.auth?.user);

  if (user?.role in routesByRole) {
    return routesByRole[user.role];
  } else {
    // Renderizar una página de error o redirigir a una página adecuada
    return <NotMatch />;
  }
};

export default LoadRoutes;
