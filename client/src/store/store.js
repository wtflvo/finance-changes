import { configureStore } from "@reduxjs/toolkit";
import tickersSliceReducer from "../features/tickers/tickersSlice";

export default configureStore({
	reducer: {
		tickers: tickersSliceReducer,
	},
});
