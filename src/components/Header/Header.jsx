import React from "react"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <nav>
      <Link to="/"> Navbar </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span>NavBUTTON</span>
      </button>
      <div id="navbarNav">
        <span>
          <Link to="/">Home</Link>
        </span>
        <span>
          <Link to="/about">About</Link>
        </span>
        <span>
          <Link to="/services">Services</Link>
        </span>
        <span>
          <Link to="/RedDotJS">RedDotJS</Link>
        </span>
        <span>
          <Link to="/RedDotJSX">RedDotJSX</Link>
        </span>
      </div>
    </nav>
  )
}

export default Header
