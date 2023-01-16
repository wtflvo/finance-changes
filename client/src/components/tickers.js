import { useSelector } from "react-redux";
import {
	selectAmazon,
	selectApple,
	selectFacebook,
	selectGoogle,
	selectMicrosoft,
	selectTesla,
} from "../features/tickers/tickersSelectors";
import React from "react";
import "./ticker.css";

const columns = [
	"Company",
	"Price",
	"Change",
	"Change(%)",
	"Dividend",
	"Yield",
];

function HeaderName(props) {
	return (
		<div className="single-ticker-container">
			<h4>{props.columnName}</h4>
		</div>
	);
}

function TickerHeaderRow() {
	const headerRow = columns.map((column, index) => (
		<HeaderName columnName={column} key={(index * 100).toString()} />
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
	const actualDataReworked = actualData.map((elem, index) => (
		<div className="single-ticker-container" key={index.toString()}>
			<p>{elem}</p>
			<TickerDiffData diff={diffData[index]} />
		</div>
	));
	console.log("Single ticker", actualData);
	return (
		<div className="ticker-row">
			<div className="single-ticker-container">
				<p className="company-name-col">{props.ticker.id}</p>
			</div>
			{actualDataReworked}
			{/* <div className="single-ticker-container">
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
			</div> */}
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

	console.log(Apple, Amazon, "Apple", "Amazon");
	const tickers = [Apple, Amazon, Microsoft, Tesla, Facebook, Google];
	const tickersReworked = tickers.map((elem, index) => (
		<TickerDataRow ticker={elem} key={(index * 10).toString()} />
	));
	console.log("Main Tickers", tickers)
	return (
		<React.Fragment>
			<TickerHeaderRow />
			<React.Fragment>{tickersReworked}</React.Fragment>

			{/* <TickerDataRow ticker={Apple} />
			<TickerDataRow ticker={Google} />
			<TickerDataRow ticker={Amazon} />
			<TickerDataRow ticker={Microsoft} />
			<TickerDataRow ticker={Facebook} />
			<TickerDataRow ticker={Tesla} /> */}
		</React.Fragment>
	);
}
export function TickersInfoContainer() {
	console.log("Main container spawned")
	return (
		<div className="tickers-info-container">
			<TickersTable />
		</div>
	);
}
