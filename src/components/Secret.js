import React, { Component } from "react"

export default class Secret extends Component {
	render() {
		console.log("Secret props: ", this.props)

		return <div>Super Secret Area!</div>
	}
}
