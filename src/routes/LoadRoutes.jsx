import * as React from "react";
import { useSelector } from "react-redux";
import { Routes, Route, Link } from "react-router-dom";
import { 
  Home, 
  About, 
  ContactUs, 
  Sell,
  Purchases,
  Purchase,
  Login,
  SignUp,
  Card,  
  Cart,
  Profile,
  Events,
  NotMatch,
  QrScanner
} from "../pages";

const GuestRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/about/" element={<About />} />
      <Route path="/contact-us/" element={<ContactUs />} />
      <Route path="/cards/:id" element={<Card />} />
      <Route path="/sign-in/" element={<Login />} />
      <Route path="/sign-up/" element={<SignUp />} />
      <Route exact path="*" element={<NotMatch />} />
    </Routes>
  )
}

const SellerRoutes = () => {

  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/about/" element={<About />} />
      <Route path="/contact-us/" element={<ContactUs />} />
      <Route path="/sell/" element={<Sell />} />
      <Route path="/sell/:id" element={<Sell />} />
      <Route path="/cards/:id" element={<Card />} />
      <Route path="/scan-qr/" element={<QrScanner/>} />
      <Route path="/events/" element={<Events />} />
      <Route path="/profile/" element={<Profile />} />
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
      <Route path="/cards/:id" element={<Card />} />
      <Route path="/purchases/" element={<Purchases />} />
      <Route path="/purchases/:id" element={<Purchase />} />
      <Route path="/cart/" element={<Cart />} />
      <Route path="/profile/" element={<Profile />} />
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
