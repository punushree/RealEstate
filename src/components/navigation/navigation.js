import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "../../screens/home/home"
 import Header from "../header/header.jsx"
import Footer from "../footer/footer.jsx"
import Property from "../../screens/Property/property"
import SinglePropery from "../../screens/Property/singlepropery"
import PropertySale from "../../screens/Property/propertysale"
import About from "../../screens/about/about"

const Navigation = () => {
  return (
    <>
  
      <Router>
       <Header /> 
        <Routes>
        <Route path="/" element={<Home/>} ></Route>
           <Route exact path='/about'element={<About/>} /> 
          <Route path="/buy" element={<PropertySale/>} ></Route>
          <Route path="/rent" element={<Property/>} ></Route>
          <Route path="/single" element={<SinglePropery/>} ></Route>

          <Route
            path="*"
            element={
              <div>
                <h2>404 Page not found </h2>
              </div>
            }
          />
        </Routes>
   <Footer /> 
   
      </Router>
    </>
  )
}

export default Navigation
