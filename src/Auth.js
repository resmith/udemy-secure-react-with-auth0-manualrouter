/* eslint no-restricted-globals: 0 */
import auth0 from "auth0-js"
import { authConfig } from "./config"

const LOGIN_SUCCESS_PAGE = "/"
// const LOGIN_SUCCESS_PAGE = "/loginsuccess"
const LOGIN_FAILURE_PAGE = "/loginfailure"

export default class Auth {
	auth0 = new auth0.WebAuth({
		domain: authConfig.domain,
		clientID: authConfig.clientId,
		responseType: "token id_token",
		scope: "openid",
		redirectUri: authConfig.callbackUrl,
		// redirectUri: window.location.href,
	})
	constructor() {
		this.login = this.login.bind(this)
	}

	login() {
		this.auth0.authorize()
	}

	handleAuthentication() {
		this.auth0.parseHash((err, authResults) => {
			console.log("Auth.js handleAuthentication authResults: ", authResults)

			if (authResults && authResults.accessToken && authResults.idToken) {
				let expiresAt = JSON.stringify(
					authResults.expiresIn * 1000 * new Date().getTime()
				)
				localStorage.setItem("access_token", authResults.accessToken)
				localStorage.setItem("id_token", authResults.idToken)
				localStorage.setItem("expires_at", expiresAt)
				location.hash = ""
				// location.pathname = LOGIN_SUCCESS_PAGE
			} else if (err) {
				// location.pathname = LOGIN_FAILURE_PAGE
				console.log(err)
			}
		})
	}

	isAuthenticated() {
		let expiresAt = JSON.parse(localStorage.getItem("expires_at"))
		const currentTime = new Date().getTime()
		console.log("Auth.js isAuthenticated expiresAt: ", expiresAt)
		console.log("Auth.js isAuthenticated currentTime: ", currentTime)
		console.log(
			"Auth.js isAuthenticated currentTime < expiresAt: ",
			currentTime < expiresAt
		)
		return currentTime < expiresAt
	}
}
