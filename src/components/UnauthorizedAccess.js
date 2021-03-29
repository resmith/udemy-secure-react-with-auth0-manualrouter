import React, { Component } from "react"

export default class UnauthorizedAccess extends Component {
	render() {
		console.log("UnauthorizedAccess props: ", this.props)

		return (
			<div>
				<p>Your being bad. Unauthorized Access.</p>

				<div>
					<hr />
					Please login
					<button onClick={this.props.auth.login}>Login</button>
				</div>
			</div>
		)
	}
}
