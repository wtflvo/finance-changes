import { io } from "socket.io-client";

import React from "react";
import { useSelector } from "react-redux";
import "./index.css";
const socket = io("http://localhost:4000");

function sendInterval(event) {
	event.preventDefault();

	if (event.target.interval.value === "10000") {
		socket.emit("data", "10000");
		console.log("10000 sended");
	} else if (event.target.interval.value === "1000") {
		socket.emit("data", "1000");
		console.log("1000 sended");
	} else {
		socket.emit("data", "5000");
		console.log("5000 sended");
	}
	let refresher = document.getElementById("refresher");
	refresher.setAttribute("content", "1");
}

export function IntervalBtn() {
	const interval = useSelector((state) => state.tickers.interval);

	return (
		<form onSubmit={(event) => sendInterval(event)} className="interval-form">
			<div>
				<label htmlFor="intraval" className="interval-label">
					Update every: <b>{interval / 1000} sec</b>{" "}
				</label>
			</div>
			<select
				name="interval"
				id="interval"
				defaultValue={""}
				className="interval-select"
			>
				<option value="" disabled>
					Update interval
				</option>
				<option value="1000">1 second</option>
				<option value="5000">5 seconds</option>
				<option value="10000">10 seconds</option>
			</select>
			<button type="submit" className="interval-btn" name="submit">
				Confirm & Refresh page
			</button>
		</form>
	);
}
