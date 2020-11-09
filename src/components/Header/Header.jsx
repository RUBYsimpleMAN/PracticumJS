import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

// import { main } from "../themes/themes"


const Header = () => {
  return (
    <nav>
      {/* <Link to="/"> Navbar </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span>NavBUTTON</span>
      </button> */}
      <HeaderSC>
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
      </HeaderSC>
    </nav>
  )
}

export default Header


const HeaderSC = styled.div`
  display: flex;
  justify-content: space-around;
  position: fixed;
  top: 0px;
  height: 60px;
  width: 100%;
  left: 0px;
  line-height: 40px;
  color: red;
a{
  color: red;
}
`