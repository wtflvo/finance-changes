import { createSlice } from "@reduxjs/toolkit";
import {
	amazonPriceReducer,
	applePriceReducer,
	microsoftPriceReducer,
	teslaPriceReducer,
	facebookPriceReducer,
	googlePriceReducer,
	intervalReducer,
	isUpdatedReducer,
	isVisibleReducer,
} from "../reducers/tickersReducer";

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
			name: "Amazon",
			isVisible: true,
			isUpdated: true,
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
			name: "Apple",
			isVisible: true,
			isUpdated: true,
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
			name: "Facebook",
			isVisible: true,
			isUpdated: true,
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
			name: "Google",
			isVisible: true,
			isUpdated: true,
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
			name: "Microsoft",
			isVisible: true,
			isUpdated: true,
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
			name: "Tesla",
			isVisible: true,
			isUpdated: true,
		},
		interval: 5000,
	},
	reducers: {
		amazonPriceReducer,
		applePriceReducer,
		facebookPriceReducer,
		googlePriceReducer,
		microsoftPriceReducer,
		teslaPriceReducer,
		intervalReducer,
		isUpdatedReducer,
		isVisibleReducer,
	},
});

export const {
	amazonPriceReducer: amazonPrice,
	applePriceReducer: applePrice,
	facebookPriceReducer: facebookPrice,
	googlePriceReducer: googlePrice,
	microsoftPriceReducer: microsoftPrice,
	teslaPriceReducer: teslaPrice,
	intervalReducer: interval,
	isUpdatedReducer: update,
	isVisibleReducer: visibility,
} = tickersSlice.actions;

export const tickersChangeAsync = (data) => (dispatch) => {
	dispatch(amazonPrice(data));
	dispatch(applePrice(data));
	dispatch(facebookPrice(data));
	dispatch(googlePrice(data));
	dispatch(microsoftPrice(data));
	dispatch(teslaPrice(data));
	dispatch(interval(data));
};

export default tickersSlice.reducer;
