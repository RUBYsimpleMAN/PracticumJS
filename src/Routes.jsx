import React from "react"
import { Switch, Route } from "react-router-dom"

import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Services from "./pages/Services/Services"

import RedDotJS from "./components/pureJS/FirstTurnOfTheSpiral/reddot"
import RedDotJSX from "./components/react/FirstTurnOfTheSpiral/reddot"



const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/services" component={Services} />
      <Route path="/RedDotJS" component={RedDotJS} />
      <Route path="/RedDotJSX" component={RedDotJSX} />
    </Switch>
  )
}

export default Routes;
