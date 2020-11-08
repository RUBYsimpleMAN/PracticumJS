import React from "react"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div className="fixed-bottom">
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
  )
}

export default Footer
