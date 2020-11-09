import React from "react"
import { BrowserRouter as Router } from "react-router-dom"
import styled from "styled-components"

import Header from "./components/Header/Header"
import {Footer} from "./components/Footer/Footer"
import Routes from "./Routes"
import { main } from "./components/themes/themes"


function App() {
  return (
    <AppWrapper>
      <Router>
        <Header />
          <Routes />
        <Footer />
       </Router>
    </AppWrapper>
  )
}

export default App;


const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  Header{
   /* 0 flex-grow, 0 flex-shrink, auto flex-basis */
   flex: 0 0 auto;
  }
  Routes{
   /* 1 flex-grow, 0 flex-shrink, auto flex-basis */
   flex: 1 0 auto;
}
  Footer{
   /* 0 flex-grow, 0 flex-shrink, auto flex-basis */
   flex: 0 0 auto;
}
`
