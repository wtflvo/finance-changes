function singleStateReducer(stateOld, actionOld) {
	if (stateOld.isUpdated === true) {
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
	return stateOld;
}

export function applePriceReducer(state, action) {
	state.Apple = singleStateReducer(state.Apple, action.payload[0]);
}
export function googlePriceReducer(state, action) {
	state.Google = singleStateReducer(state.Google, action.payload[1]);
}
export function microsoftPriceReducer(state, action) {
	state.Microsoft = singleStateReducer(state.Microsoft, action.payload[2]);
}
export function amazonPriceReducer(state, action) {
	state.Amazon = singleStateReducer(state.Amazon, action.payload[3]);
}
export function facebookPriceReducer(state, action) {
	state.Facebook = singleStateReducer(state.Facebook, action.payload[4]);
}
export function teslaPriceReducer(state, action) {
	state.Tesla = singleStateReducer(state.Tesla, action.payload[5]);
}
export function intervalReducer(state, action) {
	return { ...state, interval: action.payload.pop().interval };
}
export function isUpdatedReducer(state, action) {
	switch (action.payload) {
		case "Amazon":
			state.Amazon.isUpdated = !state.Amazon.isUpdated;
			break;

		case "Apple":
			state.Apple.isUpdated = !state.Apple.isUpdated;
			break;

		case "Facebook":
			state.Facebook.isUpdated = !state.Facebook.isUpdated;
			break;
		case "Google":
			state.Google.isUpdated = !state.Google.isUpdated;
			break;
		case "Microsoft":
			state.Microsoft.isUpdated = !state.Microsoft.isUpdated;
			break;
		case "Tesla":
			state.Tesla.isUpdated = !state.Tesla.isUpdated;
			break;

		default:
			return state;
	}
}
export function isVisibleReducer(state, action) {
	switch (action.payload) {
		case "Amazon":
			state.Amazon.isVisible = !state.Amazon.isVisible;
			break;

		case "Apple":
			state.Apple.isVisible = !state.Apple.isVisible;
			break;

		case "Facebook":
			state.Facebook.isVisible = !state.Facebook.isVisible;
			break;
		case "Google":
			state.Google.isVisible = !state.Google.isVisible;
			break;
		case "Microsoft":
			state.Microsoft.isVisible = !state.Microsoft.isVisible;
			break;
		case "Tesla":
			state.Tesla.isVisible = !state.Tesla.isVisible;
			break;

		default:
			return state;
	}
}
