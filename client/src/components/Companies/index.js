import { useDispatch } from "react-redux";
import { names } from "../../constants";

import { visibility } from "../../redux/slices/tickersSlice";
import "./index.css";

import { LogoButton } from "../LogoButton";

export function Companies() {
	const dispatch = useDispatch();

	const companiesRow = names.map((name, index) => {
		return (
			<div
				key={name.toString()}
				onClick={() => {
					dispatch(visibility(name));
				}}
			>
				<LogoButton name={name} index={index} />
			</div>
		);
	});

	return <div className="companies-row">{companiesRow}</div>;
}
