import { createSlice } from "@reduxjs/toolkit";

export const tickersSlice = createSlice({
	name: "tickers",

	initialState: {
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
		changeApplePrice: (state, action) => {
			state.Apple = changeSingleState(state.Apple, action.payload[0]);
		},
		changeGooglePrice: (state, action) => {
			state.Google = changeSingleState(state.Google, action.payload[1]);
		},
		changeMicrosoftPrice: (state, action) => {
			state.Microsoft = changeSingleState(state.Microsoft, action.payload[2]);
		},
		changeAmazonPrice: (state, action) => {
			state.Amazon = changeSingleState(state.Amazon, action.payload[3]);
		},
		changeFacebookPrice: (state, action) => {
			state.Facebook = changeSingleState(state.Facebook, action.payload[4]);
		},
		changeTeslaPrice: (state, action) => {
			state.Tesla = changeSingleState(state.Tesla, action.payload[5]);
		},
	},
});

function changeSingleState(stateOld, actionOld) {
	const stateObj = Object.create(stateOld);
	const actionObj = Object.create(actionOld);
	stateObj.diffPrice = (actionObj.price - stateObj.price).toFixed(2);
	stateObj.diffChange = (actionObj.change - stateObj.change).toFixed(2);
	stateObj.diffChange_percent = (
		actionObj.change_percent - stateObj.change_percent
	).toFixed(2);
	stateObj.diffDividend = (actionObj.dividend - stateObj.dividend).toFixed(2);
	stateObj.diffYield = (actionObj.yield - stateObj.yield).toFixed(2);

	stateObj.price = actionObj.price;
	stateObj.change = actionObj.change;
	stateObj.change_percent = actionObj.change_percent;
	stateObj.dividend = actionObj.dividend;
	stateObj.yield = actionObj.yield;

	return stateObj;
}

export const {
	changeApplePrice,
	changeTeslaPrice,
	changeAmazonPrice,
	changeFacebookPrice,
	changeGooglePrice,
	changeMicrosoftPrice,
} = tickersSlice.actions;

export const tickersChangeAsync = (data) => (dispatch) => {
	if (data.case === "all") {
		
			dispatch(changeApplePrice(data.prices));
			dispatch(changeTeslaPrice(data.prices));
			dispatch(changeAmazonPrice(data.prices));
			dispatch(changeFacebookPrice(data.prices));
			dispatch(changeGooglePrice(data.prices));
			dispatch(changeMicrosoftPrice(data.prices));
		
	}
};

export default tickersSlice.reducer;
