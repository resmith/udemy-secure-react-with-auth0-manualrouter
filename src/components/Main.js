import React, { Component } from "react"

export default class Main extends Component {
	render() {
		console.log("Main props: ", this.props)

		return (
			<div>
				<p>
					Hello {this.props.name ? this.props.name : null}!<br />
					Like to see the secret area? <a href="/secret">Click here</a>
				</p>
				{!this.props.auth.isAuthenticated() ? (
					<div>
						<hr />
						Please login
						<button onClick={this.props.auth.login}>Login</button>
					</div>
				) : null}
			</div>
		)
	}
}
