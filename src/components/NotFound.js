import React, { Component } from "react"

export default class NotFound extends Component {
	render() {
		console.log("NotFound props: ", this.props)

		return <div>Not Found ;(</div>
	}
}
