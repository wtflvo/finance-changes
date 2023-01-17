import {  useSelector } from "react-redux";
import { columns } from "../../constants";

import React from "react";
import "./ticker.css";


function HeaderName(props) {
	return (
		<div className="single-ticker-container">
			<h4>{props.columnName}</h4>
		</div>
	);
}

function TickerHeaderRow() {
	const headerRow = columns.map((column) => (
		<HeaderName columnName={column} key={column.toString()} />
	));
	return <div className="ticker-row header-row-container">{headerRow}</div>;
}

function TickerDiffData(props) {
	if (props.start === true) {
		return (
			<div>
				<span className="diff-data diff-data-positive">--</span>
			</div>
		);
	} else if (props.diff > 0) {
		return (
			<div>
				<span className="diff-data diff-data-positive">{props.diff}</span>
				<span>
					<img src="greenSm.png" className="arrow" alt="arrUp" />
				</span>
			</div>
		);
	}
	return (
		<div>
			<span className="diff-data diff-data-negative">{props.diff}</span>
			<span>
				<img src="yelSm.png" className="arrow" alt="arrDown" />
			</span>
		</div>
	);
}

function TickerDataRow(props) {
	const actualData = [
		props.ticker.price,
		props.ticker.change,
		props.ticker.change_percent,
		props.ticker.dividend,
		props.ticker.yield,
	];
	const diffData = [
		props.ticker.diffPrice,
		props.ticker.diffChange,
		props.ticker.diffChange_percent,
		props.ticker.diffDividend,
		props.ticker.diffYield,
	];
	let startIndicator =
		actualData[0] === diffData[0] && actualData[1] === diffData[1]
			? true
			: false;

	const actualDataReworked = actualData.map((elem, index) => (
		<div className="single-ticker-container" key={`actualdata${index}`}>
			<p>{elem}</p>
			<TickerDiffData diff={diffData[index]} start={startIndicator} />
		</div>
	));
	console.log("Single ticker", actualData);
	return (
		<div className="ticker-row">
			<div className="single-ticker-container">
				<p className="company-name-col">{props.ticker.id}</p>
			</div>
			{actualDataReworked}
		</div>
	);
}

function TickersTable() {
	const state = useSelector((state) => state);
	const tickers = [
		state.tickers.Amazon,
		state.tickers.Apple,
		state.tickers.Facebook,
		state.tickers.Tesla,
		state.tickers.Microsoft,
		state.tickers.Google,
	];

	const tickersReworked = tickers.map((elem) => (
		<TickerDataRow ticker={elem} key={elem.id} />
	));

	console.log("Main Tickers", tickers);
	return (
		<React.Fragment>
			<TickerHeaderRow />
			<React.Fragment>{tickersReworked}</React.Fragment>
		</React.Fragment>
	);
}
export function TickersInfoContainer() {
	

	return (
		<div className="tickers-info-container">
			<TickersTable />
		</div>
	);
}
