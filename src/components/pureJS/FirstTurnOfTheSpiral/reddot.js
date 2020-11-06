import React, { useEffect } from "react"

export default function ReactRedDotJS() {
  useEffect(() => {
    // ванильный код js
    let reddot = document.createElement("div")
    reddot.style.display =         "flex"
    reddot.style.margin =           0
    reddot.style.padding =          0
    reddot.style.height =          "100vh"
    reddot.style.alignItems =      "center"
    reddot.style.justifyContent =  "center"
    reddot.style.fontSize =        "300px"
    reddot.style.lineHeight =       0
    reddot.style.color =           "red"
    reddot.style.backgroundColor = "black"
    reddot.style.userSelect =      "none"
    reddot.innerHTML =             "&centerdot;"
    document.body.append(reddot)
    // очистка
    return () => document.body.remove(reddot)
  })
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

