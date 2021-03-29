import React, { Component } from "react"

import logo from "./logo.svg"
import "./App.css"
import Main from "./components/Main"
import Secret from "./components/Secret"
import NotFound from "./components/NotFound"
import Callback from "./components/Callback"
import UnauthorizedAccess from "./components/UnauthorizedAccess"

class App extends Component {
	render() {
		console.log("App this.props: ", this.props)
		console.log("App isAuthenticated: ", this.props.auth.isAuthenticated())
		let mainComponent = ""
		switch (this.props.location) {
			case "":
				mainComponent = <Main {...this.props} />
				break
			case "secret":
				mainComponent = this.props.auth.isAuthenticated() ? (
					<Secret {...this.props} />
				) : (
					<UnauthorizedAccess {...this.props} />
				)
				break
			case "callback":
				mainComponent = <Callback {...this.props} />
				break
			default:
				mainComponent = <NotFound />
		}

		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<div>
						Edit <code>src/App.js</code> and save to reload.
						{mainComponent}
					</div>
				</header>
			</div>
		)
	}
}

export default App
