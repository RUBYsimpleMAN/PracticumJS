import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

// import { main } from "../themes/themes"


export const Footer = () => {
  return (    
    <FooterSC>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/about">About</Link>
      </div>
      <div>
        <Link to="/services">Services</Link>
      </div>
      <div>
        <Link to="/RedDotJS">RedDotJS</Link>
      </div>
      <div>
        <Link to="/RedDotJSX">RedDotJSX</Link>
      </div>
    </FooterSC>
  )
}

// export default Footer


const FooterSC = styled.div`
  display: flex;
  justify-content: space-around;
  position:fixed;
  left:0px;
  bottom:0px;
  height:30px;
  width:100%;
  color: red;
a{
  color: red;
}

`
