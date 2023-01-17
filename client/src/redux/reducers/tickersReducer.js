function SingleStateReducer(stateOld, actionOld) {
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

export function applePriceReducer  (state, action)  {
    state.Apple = SingleStateReducer(state.Apple, action.payload[0]);
}
export function googlePriceReducer  (state, action)  {
    state.Google = SingleStateReducer(state.Google, action.payload[1]);
}
export function microsoftPriceReducer  (state, action)  {
    state.Microsoft = SingleStateReducer(state.Microsoft, action.payload[2]);
}
export function amazonPriceReducer  (state, action)  {
    state.Amazon = SingleStateReducer(state.Amazon, action.payload[3]);
}
export function facebookPriceReducer  (state, action)  {
    state.Facebook = SingleStateReducer(state.Facebook, action.payload[4]);
}
export function teslaPriceReducer (state, action)  {
    state.Tesla = SingleStateReducer(state.Tesla, action.payload[5]);
}