import * as React from "react";

import { Routes, Route } from "react-router-dom";
import { Home, About, ContactUs, NotMatch } from "../pages";

const LoadRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact-us" element={<ContactUs />} />
      {/* <Route exact path="*" element={<NotMatch />} /> */}
    </Routes>
  )
}

export default LoadRoutes;
