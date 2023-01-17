import React from "react";
import "./index.css";
import { Table } from "../TickersTable";

export function TickersDashboard() {
	return (
		<div className="tickers-info-container">
			<Table />
		</div>
	);
}
