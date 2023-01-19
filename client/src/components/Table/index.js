import { useSelector } from "react-redux";
import { DataRow } from "../DataRow";
import { HeaderRow } from "../HeaderRow";
import React from "react";

export function Table() {
	const state = useSelector((state) => state);
	const {
		Amazon,
		Apple,
		Facebook,
		Tesla,
		Microsoft,
		Google
	} = state.tickers;
	
	const tickers = [
		Amazon,
		Apple,
		Facebook,
		Tesla,
		Microsoft,
		Google
	];

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
