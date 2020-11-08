import React from "react"
import { BrowserRouter as Router } from "react-router-dom"

import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Routes from "./Routes"
import './App.css'

function App() {
  return (
    <Router>
      <Header />
      <div className="container mt-5">
        <Routes />
      </div>
      <Footer />
    </Router>
  );
}

export default App;
