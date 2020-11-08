import React from "react"

const divStyle = {
  display:         "flex"  ,
  margin:           0      ,
  padding:          0      ,
  height:          "100vh" ,
  alignItems:      "center",
  justifyContent:  "center",
  fontSize:        "300px" ,
  lineHeight:       0      ,
  color:           "red"   ,
  backgroundColor: "black" ,
  userSelect:      "none"
};

export default function ReactRedDotJSX() {
  return(
    <div style={divStyle}>&#183;</div>
  )
}


/* let reddot = document.createElement('div')*/

/* reddot.style.height = "calc(100vh - calc(100vh - 100%))" */

/* reddot.style.display = "flex"
reddot.style.margin = 0
reddot.style.padding = 0
reddot.style.height = "100vh"
reddot.style.alignItems = "center"
reddot.style.justifyContent = "center"
reddot.style.fontSize = "300px"
reddot.style.lineHeight = 0
reddot.style.color = "red"
reddot.style.backgroundColor = "black"
reddot.style.userSelect = "none"

reddot.innerHTML = "&centerdot;";

document.body.append(reddot) */

