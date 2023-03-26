import React from 'react'
import Navbar from "../../layouts/Navbar/Index";
import Footer from "../../layouts/Footer/Index";
import Form from "./components/Form";
import "./Index.css";

function Index() {
  return (
    <div>
      <Navbar />
      <Form />
      <Footer />
    </div>
  )
}

export default Index