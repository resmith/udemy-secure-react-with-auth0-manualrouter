import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import Auth from "./Auth"

import reportWebVitals from "./reportWebVitals"

const auth = new Auth()

let state = {}

window.setState = (changes) => {
	state = Object.assign({}, state, changes)
	console.log("setState state: ", state)
	ReactDOM.render(<App {...state} />, document.getElementById("root"))
}

/* eslint no-restricted-globals: 0 */
let initialState = {
	name: "Bobby3",
	location: location.pathname.replace(/^\/?|\/$/g, ""),
	auth,
}

window.setState(initialState)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
