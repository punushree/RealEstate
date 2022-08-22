import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "../../screens/home/home"
// import About from "../../screens/About/about.jsx"
 import Header from "../header/header.jsx"
import Footer from "../footer/footer.jsx"

const Navigation = () => {
  return (
    <>
  
      <Router>
       <Header /> 
        <Routes>
        <Route
        path="/" element={<Home/>} ></Route>
          {/* <Route exact path='/about' component={About} /> */}
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
