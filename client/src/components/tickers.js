import { useSelector } from "react-redux";
import {
	selectAmazon,
	selectApple,
	selectFacebook,
	selectGoogle,
	selectMicrosoft,
	selectTesla,
} from "../features/tickers/tickersSelectors";
import React, { useEffect, useState } from "react";
import "./ticker.css";

const columns = [
	"Company",
	"Price",
	"Change",
	"Change(%)",
	"Dividend",
	"Yield",
];
function TickerHeaderRow() {
	const headerRow = columns.map((columnName) => (
		<div className="single-ticker-container">
			<h4>{columnName}</h4>
		</div>
	));
	return <div className="ticker-row header-row-container">{headerRow}</div>;
}

function TickerDiffData(props) {
	if (props.diff > 0) {
		return (
			<React.Fragment>
				<span className="diff-data diff-data-positive">{props.diff}</span>
				<span>
					<img src="greenSm.png" className="arrow" alt="arrUp" />
				</span>
			</React.Fragment>
		);
	}
	return (
		<React.Fragment>
			<span className="diff-data diff-data-negative">{props.diff}</span>
			<span>
				<img src="yelSm.png" className="arrow" alt="arrDown" />
			</span>
		</React.Fragment>
	);
}

function TickerDataRow(props) {
	return (
		<div className="ticker-row">
			<div className="single-ticker-container">
				<p className="company-name-col">{props.ticker.id}</p>
			</div>
			<div className="single-ticker-container">
				<p>{props.ticker.price}</p>
				<TickerDiffData diff={props.ticker.diffPrice} />
			</div>
			<div className="single-ticker-container">
				<p>{props.ticker.change}</p>
				<TickerDiffData diff={props.ticker.diffChange} />
			</div>
			<div className="single-ticker-container">
				<p>{props.ticker.change_percent}</p>
				<TickerDiffData diff={props.ticker.diffChange_percent} />
			</div>
			<div className="single-ticker-container">
				<p>{props.ticker.dividend}</p>
				<TickerDiffData diff={props.ticker.diffDividend} />
			</div>
			<div className="single-ticker-container">
				<p>{props.ticker.yield}</p>
				<TickerDiffData diff={props.ticker.diffYield} />
			</div>
		</div>
	);
}

function TickersTable() {
	const Apple = useSelector(selectApple);
	const Amazon = useSelector(selectAmazon);
	const Microsoft = useSelector(selectMicrosoft);
	const Tesla = useSelector(selectTesla);
	const Facebook = useSelector(selectFacebook);
	const Google = useSelector(selectGoogle);
	return (
		<React.Fragment>
			<TickerHeaderRow />
			<TickerDataRow ticker={Apple} />
			<TickerDataRow ticker={Google} />
			<TickerDataRow ticker={Amazon} />
			<TickerDataRow ticker={Microsoft} />
			<TickerDataRow ticker={Facebook} />
			<TickerDataRow ticker={Tesla} />
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
