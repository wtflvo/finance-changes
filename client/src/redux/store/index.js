import { configureStore } from "@reduxjs/toolkit";
import tickersSliceReducer from "../slices/tickersSlice";

export default configureStore({
	reducer: {
		tickers: tickersSliceReducer,
	},
});
