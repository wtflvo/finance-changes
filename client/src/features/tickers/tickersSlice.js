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
			console.log("States are starting update");
			state.Apple.diffPrice = (
				action.payload[0].price - state.Apple.price
			).toFixed(2);
			state.Apple.diffChange = (
				action.payload[0].change - state.Apple.change
			).toFixed(2);
			state.Apple.diffChange_percent = (
				action.payload[0].change_percent - state.Apple.change_percent
			).toFixed(2);
			state.Apple.diffDividend = (
				action.payload[0].dividend - state.Apple.dividend
			).toFixed(2);
			state.Apple.diffYield = (
				action.payload[0].yield - state.Apple.yield
			).toFixed(2);

			state.Apple.price = action.payload[0].price;
			state.Apple.change = action.payload[0].change;
			state.Apple.change_percent = action.payload[0].change_percent;
			state.Apple.dividend = action.payload[0].dividend;
			state.Apple.yield = action.payload[0].yield;
		},

		changeGooglePrice: (state, action) => {
			state.Google.diffPrice = (
				action.payload[1].price - state.Google.price
			).toFixed(2);
			state.Google.diffChange = (
				action.payload[1].change - state.Google.change
			).toFixed(2);
			state.Google.diffChange_percent = (
				action.payload[1].change_percent - state.Google.change_percent
			).toFixed(2);
			state.Google.diffDividend = (
				action.payload[1].dividend - state.Google.dividend
			).toFixed(2);
			state.Google.diffYield = (
				action.payload[1].yield - state.Google.yield
			).toFixed(2);

			state.Google.price = action.payload[1].price;
			state.Google.change = action.payload[1].change;
			state.Google.change_percent = action.payload[1].change_percent;
			state.Google.dividend = action.payload[1].dividend;
			state.Google.yield = action.payload[1].yield;
		},
		changeMicrosoftPrice: (state, action) => {
			state.Microsoft.diffPrice = (
				action.payload[2].price - state.Microsoft.price
			).toFixed(2);
			state.Microsoft.diffChange = (
				action.payload[2].change - state.Microsoft.change
			).toFixed(2);
			state.Microsoft.diffChange_percent = (
				action.payload[2].change_percent - state.Microsoft.change_percent
			).toFixed(2);
			state.Microsoft.diffDividend = (
				action.payload[2].dividend - state.Microsoft.dividend
			).toFixed(2);
			state.Microsoft.diffYield = (
				action.payload[2].yield - state.Microsoft.yield
			).toFixed(2);

			console.log("States is updating");

			state.Microsoft.price = action.payload[2].price;
			state.Microsoft.change = action.payload[2].change;
			state.Microsoft.change_percent = action.payload[2].change_percent;
			state.Microsoft.dividend = action.payload[2].dividend;
			state.Microsoft.yield = action.payload[2].yield;
		},
		changeAmazonPrice: (state, action) => {
			state.Amazon.diffPrice = (
				action.payload[3].price - state.Amazon.price
			).toFixed(2);
			state.Amazon.diffChange = (
				action.payload[3].change - state.Amazon.change
			).toFixed(2);
			state.Amazon.diffChange_percent = (
				action.payload[3].change_percent - state.Amazon.change_percent
			).toFixed(2);
			state.Amazon.diffDividend = (
				action.payload[3].dividend - state.Amazon.dividend
			).toFixed(2);
			state.Amazon.diffYield = (
				action.payload[3].yield - state.Amazon.yield
			).toFixed(2);

			state.Amazon.price = action.payload[3].price;
			state.Amazon.change = action.payload[3].change;
			state.Amazon.change_percent = action.payload[3].change_percent;
			state.Amazon.dividend = action.payload[3].dividend;
			state.Amazon.yield = action.payload[3].yield;
		},
		changeFacebookPrice: (state, action) => {
			state.Facebook.diffPrice = (
				action.payload[4].price - state.Facebook.price
			).toFixed(2);
			state.Facebook.diffChange = (
				action.payload[4].change - state.Facebook.change
			).toFixed(2);
			state.Facebook.diffChange_percent = (
				action.payload[4].change_percent - state.Facebook.change_percent
			).toFixed(2);
			state.Facebook.diffDividend = (
				action.payload[4].dividend - state.Facebook.dividend
			).toFixed(2);
			state.Facebook.diffYield = (
				action.payload[4].yield - state.Facebook.yield
			).toFixed(2);

			state.Facebook.price = action.payload[4].price;
			state.Facebook.change = action.payload[4].change;
			state.Facebook.change_percent = action.payload[4].change_percent;
			state.Facebook.dividend = action.payload[4].dividend;
			state.Facebook.yield = action.payload[4].yield;
		},
		changeTeslaPrice: (state, action) => {
			state.Tesla.diffPrice = (
				action.payload[5].price - state.Tesla.price
			).toFixed(2);
			state.Tesla.diffChange = (
				action.payload[5].change - state.Tesla.change
			).toFixed(2);
			state.Tesla.diffChange_percent = (
				action.payload[5].change_percent - state.Tesla.change_percent
			).toFixed(2);
			state.Tesla.diffDividend = (
				action.payload[5].dividend - state.Tesla.dividend
			).toFixed(2);
			state.Tesla.diffYield = (
				action.payload[5].yield - state.Tesla.yield
			).toFixed(2);

			state.Tesla.price = action.payload[5].price;
			state.Tesla.change = action.payload[5].change;
			state.Tesla.change_percent = action.payload[5].change_percent;
			state.Tesla.dividend = action.payload[5].dividend;
			state.Tesla.yield = action.payload[5].yield;
		},
	},
});

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
		console.log("States updated");
	}
};

export default tickersSlice.reducer;
