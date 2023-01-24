import { useDispatch } from "react-redux";
import { DiffData } from "../DiffData";
import { update } from "../../redux/slices/tickersSlice";
import "./index.css";

export function DataRow(props) {
	const dispatch = useDispatch();
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
		isVisible,
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
	const visibility = isVisible ? { display: "flex" } : { display: "none" };

	return (
		<div className="ticker-row" style={visibility}>
			<div className="single-ticker-container">
				<p className="company-name-col">{name}</p>
				<img className="logo" src={`${name.toLowerCase()}.png`} alt="logo" />
			</div>
			{actualDataReworked}
			<div className="single-ticker-container input-container">
				<input
					type="checkbox"
					className="update-input"
					defaultChecked
					onClick={() => dispatch(update(name))}
				/>
			</div>
		</div>
	);
}
