// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`

export const selectApple = (state) => state.tickers.Apple;
export const selectGoogle = (state) => state.tickers.Google;
export const selectMicrosoft = (state) => state.tickers.Microsoft;
export const selectAmazon = (state) => state.tickers.Amazon;
export const selectFacebook = (state) => state.tickers.Facebook;
export const selectTesla = (state) => state.tickers.Tesla;

