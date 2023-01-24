import { io } from "socket.io-client";

import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import "./index.css";
import { intervalSelector } from "../../redux/selectors/tickersSelectors";
const socket = io("http://localhost:4000");

export function sendInterval(event) {
	event.preventDefault();

	if (event.target.interval.value === "10000") {
		socket.emit("data", "10000");
	} else if (event.target.interval.value === "1000") {
		socket.emit("data", "1000");
	} else {
		socket.emit("data", "5000");
	}
	const refresher = document.getElementById("refresher");
	refresher.setAttribute("content", "1");
}

export function IntervalForm() {
	const interval = useSelector(intervalSelector);
	const memoInterval = useMemo(() => interval, [interval]);

	return (
		<form onSubmit={(event) => sendInterval(event)} className="interval-form">
			<div>
				<label htmlFor="intraval" className="interval-label">
					Update every: <b>{memoInterval / 1000} sec</b>{" "}
				</label>
			</div>
			<select
				data-testid="select"
				name="interval"
				id="interval"
				defaultValue={""}
				className="interval-select shining"
			>
				<option value="" disabled>
					Update interval
				</option>
				<option data-testid="select-option" value="1000">
					1 second
				</option>
				<option data-testid="select-option" value="5000">
					5 seconds
				</option>
				<option data-testid="select-option" value="10000">
					10 seconds
				</option>
			</select>
			<button
				type="submit"
				className="interval-btn shining"
				name="submit"
				data-testid="submit-interval"
			>
				Confirm & Refresh page
			</button>
		</form>
	);
}
