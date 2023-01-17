import { createSlice } from "@reduxjs/toolkit";
import {
	amazonPriceReducer,
	applePriceReducer,
	microsoftPriceReducer,
	teslaPriceReducer,
	facebookPriceReducer,
	googlePriceReducer,
} from "./reducers/tickersReducer";
export const tickersSlice = createSlice({
	name: "tickers",

	initialState: {
		Amazon: {
			price: 0,
			diffPrice: 0,
			change: 0,
			diffChange: 0,
			change_percent: 0,
			diffChange_percent: 0,
			dividend: 0,
			diffDividend: 0,
			yield: 0,
			diffYield: 0,
			id: "AMZN",
		},
		Apple: {
			price: 0,
			diffPrice: 0,
			change: 0,
			diffChange: 0,
			change_percent: 0,
			diffChange_percent: 0,
			dividend: 0,
			diffDividend: 0,
			yield: 0,
			diffYield: 0,
			id: "APPL",
		},

		Facebook: {
			price: 0,
			diffPrice: 0,
			change: 0,
			diffChange: 0,
			change_percent: 0,
			diffChange_percent: 0,
			dividend: 0,
			diffDividend: 0,
			yield: 0,
			diffYield: 0,
			id: "FB",
		},
		Google: {
			price: 0,
			diffPrice: 0,
			change: 0,
			diffChange: 0,
			change_percent: 0,
			diffChange_percent: 0,
			dividend: 0,
			diffDivident: 0,
			yield: 0,
			diffYield: 0,
			id: "GOOGL",
		},
		Microsoft: {
			price: 0,
			diffPrice: 0,
			change: 0,
			diffChange: 0,
			change_percent: 0,
			diffChange_percent: 0,
			dividend: 0,
			diffDividend: 0,
			yield: 0,
			diffYield: 0,
			id: "MSFT",
		},

		Tesla: {
			price: 0,
			diffPrice: 0,
			change: 0,
			diffChange: 0,
			change_percent: 0,
			diffChange_percent: 0,
			dividend: 0,
			diffDividend: 0,
			yield: 0,
			diffYield: 0,
			id: "TSLA",
		},
	},
	reducers: {
		amazonPriceReducer,
		applePriceReducer,
		facebookPriceReducer,
		googlePriceReducer,
		microsoftPriceReducer,
		teslaPriceReducer,
	},
});


export const {
	amazonPriceReducer: amazonPrice,
	applePriceReducer: applePrice,
	facebookPriceReducer: facebookPrice,
	googlePriceReducer: googlePrice,
	microsoftPriceReducer: microsoftPrice,
	teslaPriceReducer: teslaPrice,
} = tickersSlice.actions;

export const tickersChangeAsync = (data) => (dispatch) => {
	if (data.case === "all") {
		dispatch(amazonPrice(data.prices));
		dispatch(applePrice(data.prices));
		dispatch(facebookPrice(data.prices));
		dispatch(googlePrice(data.prices));
		dispatch(microsoftPrice(data.prices));
		dispatch(teslaPrice(data.prices));
	}
};

export default tickersSlice.reducer;
