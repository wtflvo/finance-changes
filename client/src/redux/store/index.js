import { configureStore } from "@reduxjs/toolkit";
import tickersSliceReducer from "../tickersSlice";

export default configureStore({
	reducer: {
		tickers: tickersSliceReducer,
	},
});
