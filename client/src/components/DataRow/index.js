
import { DiffData } from "../DiffData";

export function DataRow(props) {
	const {
		price,
		change,
		change_percent,
		dividend,
		yield: dataYield,
		diffPrice,
		diffChange,
		diffChange_percent,
		diffDividend,
		diffYield,
		name,
	} = props.ticker;

	const actualData = [price, change, change_percent, dividend, dataYield];
	const diffData = [
		diffPrice,
		diffChange,
		diffChange_percent,
		diffDividend,
		diffYield,
	];
	let startIndicator =
		actualData[0] === diffData[0] && actualData[1] === diffData[1]
			? true
			: false;

	const actualDataReworked = actualData.map((elem, index) => (
		<div className="single-ticker-container" key={`actualdata${index}`}>
			<p>{elem}</p>
			<DiffData diff={diffData[index]} start={startIndicator} />
		</div>
	));

	return (
		<div className="ticker-row">
			<div className="single-ticker-container">
				<p className="company-name-col">{name}</p>
			</div>
			{actualDataReworked}
		</div>
	);
}
