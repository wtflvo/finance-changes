import { useSelector } from "react-redux";
import { DataRow } from "../DataRow";
import { HeaderRow } from "../HeaderRow";
import React from "react";

import { all } from "../../redux/selectors/tickersSelectors";

export function Table() {
	const state = useSelector(all);
	const { Amazon, Apple, Facebook, Tesla, Microsoft, Google } = state.tickers;

	const tickers = [Amazon, Apple, Facebook, Google, Microsoft, Tesla];

	const tickersReworked = tickers.map((elem) => (
		<DataRow ticker={elem} key={elem.name} />
	));

	return (
		<React.Fragment>
			<HeaderRow />
			<React.Fragment>{tickersReworked}</React.Fragment>
		</React.Fragment>
	);
}
